import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { contractABI, contractAddress } from '../constants' // Adjust import path as needed
import { sepolia } from 'wagmi/chains'
import { waitForTransactionReceipt } from 'wagmi/actions'
import { wagmiConfig } from '../configs/wagmiConfig'

interface CreatePromptParams {
    title: string
    description: string
    model: string
    price: bigint
    filecoinHash: string
    image: string
}

interface UseCreatePromptResult {
    createPrompt: (params: CreatePromptParams) => Promise<string>
    isLoading: boolean
    isSuccess: boolean
    isError: boolean
    error: Error | null
    hash: `0x${string}` | undefined
    reset: () => void
}

export function useCreatePrompt(): UseCreatePromptResult {
    const {
        writeContractAsync: writeContract,
        data: hash,
        error,
        isError,
        isPending,
        reset
    } = useWriteContract()

    const {
        isLoading: isConfirming,
        isSuccess
    } = useWaitForTransactionReceipt({
        hash,
    })


    const createPrompt = async ({
        title,
        description,
        model,
        price,
        filecoinHash,
        image
    }: CreatePromptParams) => {
        const hash = await writeContract({
            address: contractAddress,
            abi: contractABI,
            functionName: 'createPrompt',
            args: [title, description, model, price, filecoinHash, image],
            chainId: sepolia.id,
        })
        const receipt = await waitForTransactionReceipt(wagmiConfig, {
            hash: hash,
            confirmations: 1
        });
        return receipt.transactionHash
    }

    return {
        createPrompt,
        isLoading: isPending || isConfirming,
        isSuccess,
        isError,
        error,
        hash,
        reset
    }
}