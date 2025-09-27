import { useWriteContract, useWaitForTransactionReceipt, useReadContract, useAccount } from 'wagmi'
import { contractABI, contractAddress, USDC_ABI, USDC_ADDRESS } from '../constants' // Adjust import path as needed
import { useState } from 'react'

interface BuyPromptParams {
    promptId: bigint
    price: bigint
}

interface UseBuyPromptResult {
    buyPrompt: (params: BuyPromptParams) => Promise<void>
    isLoading: boolean
    isSuccess: boolean
    isError: boolean
    error: Error | null
    hash: `0x${string}` | undefined
    reset: () => void
    needsAllowance: boolean
    isCheckingAllowance: boolean
}

export function useBuyPrompt(): UseBuyPromptResult {
    const { address } = useAccount()
    const [isProcessing, setIsProcessing] = useState(false)
    const [currentPromptPrice, setCurrentPromptPrice] = useState<bigint>(BigInt(0))

    const {
        writeContract,
        data: hash,
        error,
        isError,
        isPending,
        reset: resetWrite
    } = useWriteContract()

    const {
        writeContract: writeApproval,
        data: approvalHash,
        error: approvalError,
        isError: isApprovalError,
        isPending: isApprovalPending,
        reset: resetApproval
    } = useWriteContract()

    const {
        isLoading: isConfirming,
        isSuccess: isPurchaseSuccess
    } = useWaitForTransactionReceipt({
        hash,
    })

    const {
        isLoading: isApprovalConfirming,
        isSuccess: isApprovalSuccess
    } = useWaitForTransactionReceipt({
        hash: approvalHash,
    })

    // Check current allowance
    const {
        data: currentAllowance,
        isLoading: isCheckingAllowance,
        refetch: refetchAllowance
    } = useReadContract({
        address: USDC_ADDRESS,
        abi: USDC_ABI,
        functionName: 'allowance',
        args: address ? [address, contractAddress] : undefined,
        query: {
            enabled: !!address
        }
    })

    const needsAllowance = currentPromptPrice > BigInt(0) &&
        currentAllowance !== undefined &&
        (currentAllowance as bigint) < currentPromptPrice

    const approveToken = async (amount: bigint) => {
        writeApproval({
            address: USDC_ADDRESS,
            abi: USDC_ABI,
            functionName: 'approve',
            args: [contractAddress, amount]
        })
    }

    const executePurchase = async (promptId: bigint) => {
        writeContract({
            address: contractAddress,
            abi: contractABI,
            functionName: 'buyPrompt',
            args: [promptId]
        })
    }

    const buyPrompt = async ({ promptId, price }: BuyPromptParams) => {
        try {
            setIsProcessing(true)
            setCurrentPromptPrice(price)

            // Refresh allowance to get latest value
            await refetchAllowance()

            // Check if we need approval first
            const allowance = currentAllowance as bigint
            if (allowance < price) {
                // Need approval first
                await approveToken(price)

                await executePurchase(promptId)
            } else {
                // Already have sufficient allowance, proceed with purchase
                await executePurchase(promptId)
            }
        } catch (err) {
            console.error('Error in buyPrompt:', err)
        } finally {
            setIsProcessing(false)
        }
    }


    const reset = () => {
        resetWrite()
        resetApproval()
        setIsProcessing(false)
        setCurrentPromptPrice(BigInt(0))
    }

    const isLoading = isPending ||
        isConfirming ||
        isApprovalPending ||
        isApprovalConfirming ||
        isProcessing

    const isSuccess = isPurchaseSuccess

    const combinedError = error || approvalError

    return {
        buyPrompt,
        isLoading,
        isSuccess,
        isError: isError || isApprovalError,
        error: combinedError,
        hash: hash || approvalHash,
        reset,
        needsAllowance,
        isCheckingAllowance
    }
}