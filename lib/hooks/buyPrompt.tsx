import { useWriteContract, useWaitForTransactionReceipt, useReadContract, useAccount } from 'wagmi'
import { contractABI, contractAddress, USDC_ABI, PAYPAL_USDC_ADDRESS } from '../constants' // Adjust import path as needed
import { useState } from 'react'
import { waitForTransactionReceipt } from 'wagmi/actions'
import { wagmiConfig } from '../configs/wagmiConfig'
import { polygonAmoy } from 'wagmi/chains'

interface BuyPromptParams {
    promptId: bigint
    price: bigint
}

interface UseBuyPromptResult {
    buyPrompt: (params: BuyPromptParams) => Promise<string | undefined>
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
        writeContractAsync: writeContract,
        data: hash,
        error,
        isError,
        isPending,
        reset: resetWrite
    } = useWriteContract()


    const {
        writeContractAsync: writeApproval,
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
        address: PAYPAL_USDC_ADDRESS,
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
        const result = await writeApproval({
            address: PAYPAL_USDC_ADDRESS,
            abi: USDC_ABI,
            functionName: 'approve',
            args: [contractAddress, amount],
            chainId: polygonAmoy.id,
        })
        return result
    }

    const executePurchase = async (promptId: bigint) => {
        const result = await writeContract({
            address: contractAddress,
            abi: contractABI,
            functionName: 'buyPrompt',
            args: [promptId],
            chainId: polygonAmoy.id,
        });
        return result;
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
                const hash = await approveToken(price);
                const receipt = await waitForTransactionReceipt(wagmiConfig, {
                    hash: hash as `0x${string}`,
                    confirmations: 1
                });

                console.log("Approval receipt:", receipt.transactionHash);

                const buyHash = await executePurchase(promptId);
                await waitForTransactionReceipt(wagmiConfig, {
                    hash: buyHash as `0x${string}`,
                    confirmations: 1
                });

                return buyHash;

            } else {
                // Already have sufficient allowance, proceed with purchase
                const buyHash = await executePurchase(promptId);
                await waitForTransactionReceipt(wagmiConfig, {
                    hash: buyHash as `0x${string}`,
                    confirmations: 1
                });

                return buyHash;
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