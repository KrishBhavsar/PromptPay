import { useState, useEffect, useCallback } from "react";

// Type definitions based on your backend response
export interface LeaderboardEntry {
  address: string;
  score: number;
  rank: number;
}

interface UseLeaderboardReturn {
  data: LeaderboardEntry[] | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

interface UseLeaderboardOptions {
  // Auto-refresh interval in milliseconds (optional)
  refreshInterval?: number;
  // Whether to fetch immediately on mount
  enabled?: boolean;
  baseUrl?: string;
}

export const useLeaderboard = (
  options: UseLeaderboardOptions = {}
): UseLeaderboardReturn => {
  const { refreshInterval, enabled = true } = options;

  const [data, setData] = useState<LeaderboardEntry[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLeaderboard = useCallback(async () => {
    if (!enabled) return;

    setLoading(true);
    setError(null);

    try {
      // Hit your Next.js API route instead of ngrok directly
      const response = await fetch("/api/leaderboard", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Response:", response);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }

      const result = await response.json();

      // Set the data from your Next.js API
      setData(result);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to fetch leaderboard";
      setError(errorMessage);
      console.error("Error fetching leaderboard:", err);
    } finally {
      setLoading(false);
    }
  }, [enabled]);

  // Initial fetch on mount
  useEffect(() => {
    fetchLeaderboard();
  }, [fetchLeaderboard]);

  // Auto-refresh functionality
  useEffect(() => {
    if (!refreshInterval || !enabled) return;

    const interval = setInterval(() => {
      fetchLeaderboard();
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [fetchLeaderboard, refreshInterval, enabled]);

  return {
    data,
    loading,
    error,
    refetch: fetchLeaderboard,
  };
};
