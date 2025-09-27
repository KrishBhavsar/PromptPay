import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { contractABI, contractAddress } from '../constants' // Adjust import path as needed

interface CreatePromptParams {
    title: string
    description: string
    model: string
    price: bigint
    filecoinHash: string
}

interface UseCreatePromptResult {
    createPrompt: (params: CreatePromptParams) => void
    isLoading: boolean
    isSuccess: boolean
    isError: boolean
    error: Error | null
    hash: `0x${string}` | undefined
    reset: () => void
}

export function useCreatePrompt(): UseCreatePromptResult {
    const {
        writeContract,
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

    const createPrompt = ({
        title,
        description,
        model,
        price,
        filecoinHash
    }: CreatePromptParams) => {
        writeContract({
            address: contractAddress,
            abi: contractABI,
            functionName: 'createPrompt',
            args: [title, description, model, price, filecoinHash]
        })
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