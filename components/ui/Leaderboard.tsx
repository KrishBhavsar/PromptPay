import React from "react";
import { Trophy, Medal, Award, X, RefreshCw, AlertCircle } from "lucide-react";
import { useLeaderboard } from "@/lib/hooks/useLeaderboard";

interface LeaderboardProps {
  isOpen: boolean;
  onClose: () => void;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ isOpen, onClose }) => {
  const { data, loading, error, refetch } = useLeaderboard({
    baseUrl: "https://f2f43feb68e2.ngrok-free.app",
    refreshInterval: 30000, // Auto-refresh every 30 seconds
  });

  if (!isOpen) return null;

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-400" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-300" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return (
          <div className="w-6 h-6 flex items-center justify-center text-slate-400 font-bold text-sm">
            {rank}
          </div>
        );
    }
  };

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-yellow-400/30";
      case 2:
        return "bg-gradient-to-r from-gray-400/20 to-slate-400/20 border-gray-300/30";
      case 3:
        return "bg-gradient-to-r from-amber-600/20 to-orange-500/20 border-amber-500/30";
      default:
        return "bg-slate-800/40 border-slate-600/30";
    }
  };

  const renderContent = () => {
    if (loading && !data) {
      return (
        <div className="flex flex-col items-center justify-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mb-4"></div>
          <p className="text-slate-300 text-lg">Loading leaderboard...</p>
          <p className="text-slate-400 text-sm mt-2">
            Fetching latest rankings
          </p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex flex-col items-center justify-center py-16">
          <AlertCircle className="w-16 h-16 text-red-400 mb-4" />
          <p className="text-red-300 text-lg mb-2">
            Failed to load leaderboard
          </p>
          <p className="text-slate-400 text-sm mb-6 text-center max-w-md">
            {error}
          </p>
          <button
            onClick={refetch}
            className="flex items-center space-x-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 text-red-300 px-6 py-3 rounded-lg transition-all duration-200"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
        </div>
      );
    }

    if (!data || data.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center py-16">
          <Trophy className="w-16 h-16 text-slate-500 mb-4" />
          <p className="text-slate-300 text-lg mb-2">No rankings yet</p>
          <p className="text-slate-400 text-sm text-center max-w-md">
            Be the first to earn points and appear on the leaderboard!
          </p>
        </div>
      );
    }

    const totalPoints = data.reduce((sum, entry) => sum + entry.score, 0);
    const averagePoints = Math.round(totalPoints / data.length);

    return (
      <>
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-slate-800/30 backdrop-blur-sm border border-slate-600/30 rounded-xl mb-4 text-slate-300 font-medium text-sm">
          <div className="col-span-1">Rank</div>
          <div className="col-span-7">Address</div>
          <div className="col-span-4 text-right">Points</div>
        </div>

        {/* Leaderboard Entries */}
        <div className="space-y-3">
          {data.map((entry) => (
            <div
              key={entry.address}
              className={`grid grid-cols-12 gap-4 px-6 py-4 backdrop-blur-sm border rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${getRankStyle(
                entry.rank
              )}`}
            >
              {/* Rank */}
              <div className="col-span-1 flex items-center">
                {getRankIcon(entry.rank)}
              </div>

              {/* Address */}
              <div className="col-span-7 flex items-center">
                <div className="flex items-center space-x-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500/40 to-purple-500/40 rounded-full flex items-center justify-center text-white font-bold text-sm border border-white/20">
                    {entry.address.slice(2, 4).toUpperCase()}
                  </div>
                  {/* Address Text */}
                  <div>
                    <div className="text-slate-100 font-medium">
                      {formatAddress(entry.address)}
                    </div>
                    <div className="text-slate-400 text-xs">
                      Rank #{entry.rank}
                    </div>
                  </div>
                </div>
              </div>

              {/* Points */}
              <div className="col-span-4 flex items-center justify-end">
                <div className="text-right">
                  <div className="text-slate-100 font-bold text-lg">
                    {entry.score.toLocaleString()}
                  </div>
                  <div className="text-slate-400 text-xs">points</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-8 pt-6 border-t border-slate-600/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-600/30 rounded-xl">
              <div className="text-2xl font-bold text-slate-100">
                {data.length}
              </div>
              <div className="text-slate-400 text-sm">Total Participants</div>
            </div>
            <div className="text-center p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-600/30 rounded-xl">
              <div className="text-2xl font-bold text-slate-100">
                {totalPoints.toLocaleString()}
              </div>
              <div className="text-slate-400 text-sm">Total Points</div>
            </div>
            <div className="text-center p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-600/30 rounded-xl">
              <div className="text-2xl font-bold text-slate-100">
                {averagePoints.toLocaleString()}
              </div>
              <div className="text-slate-400 text-sm">Average Points</div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-800/95 backdrop-blur-2xl border border-slate-600/50 rounded-2xl shadow-2xl overflow-hidden">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-8 h-8 border border-white/10 transform rotate-12">
            <div
              className="w-full h-full bg-transparent border border-white/5"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            ></div>
          </div>
          <div className="absolute top-20 right-16 w-6 h-6 border border-white/15 transform -rotate-45">
            <div
              className="w-full h-full bg-transparent border border-white/10"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            ></div>
          </div>
          <div className="absolute bottom-20 left-8 w-10 h-10 border border-white/10 transform rotate-30">
            <div
              className="w-full h-full bg-transparent border border-white/10"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            ></div>
          </div>
        </div>

        {/* Modal Header */}
        <div className="relative flex items-center justify-between px-8 py-6 border-b border-slate-600/40 bg-gradient-to-r from-slate-800/60 to-gray-800/60">
          <div className="flex items-center space-x-3">
            <Trophy className="w-8 h-8 text-yellow-400" />
            <div>
              <h2 className="text-2xl font-bold text-slate-100">Leaderboard</h2>
              <p className="text-slate-300/80 text-sm mt-1">
                Top performers in our community
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {/* Refresh Button */}
            <button
              onClick={refetch}
              disabled={loading}
              className="p-2 hover:bg-slate-700/50 rounded-full transition-all duration-200 group disabled:opacity-50"
              title="Refresh leaderboard"
            >
              <RefreshCw
                className={`w-5 h-5 text-slate-400 group-hover:text-slate-200 ${
                  loading ? "animate-spin" : ""
                }`}
              />
            </button>
            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-700/50 rounded-full transition-colors duration-200 group"
            >
              <X className="w-6 h-6 text-slate-400 group-hover:text-slate-200" />
            </button>
          </div>
        </div>

        {/* Leaderboard Content */}
        <div className="relative p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
