import { useReadContract } from "wagmi";
import { contractABI, contractAddress } from "../constants"; // Adjust import path as needed

interface Prompt {
  id: bigint;
  creator: string;
  title: string;
  model: string;
  price: bigint;
  filecoinHash: string;
  image: string;
  isActive: boolean;
  createdAt: bigint;
  totalPurchases: bigint;
}

interface UsePromptsResult {
  prompts: Prompt[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
}

export function usePrompts(enabled: boolean = true): UsePromptsResult {
  const { data, isError, isLoading, error, refetch } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "getPrompts",
    query: {
      enabled: !!contractAddress,
      select(data: any) {
        return data?.filter((prompt: Prompt) => prompt.isActive);
      },
    },
  });
  console.log("Fetched prompts:", data);

  console.log("Error state:", isError, error);

  return {
    prompts: data as Prompt[] | undefined,
    isLoading,
    isError,
    error,
    refetch,
  };
}
