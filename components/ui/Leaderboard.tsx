import React from "react";
import { Trophy, Medal, Award, X } from "lucide-react";

interface LeaderboardEntry {
  id: number;
  address: string;
  points: number;
}

interface LeaderboardProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mock data - replace with actual data source
const mockLeaderboardData: LeaderboardEntry[] = [
  {
    id: 1,
    address: "0x742d35Cc6634C0532925a3b8D432C3e0a32C0532",
    points: 2450,
  },
  {
    id: 2,
    address: "0x8ba1f109551bD432C3Cc6634C0532925a3b8D4321",
    points: 2180,
  },
  {
    id: 3,
    address: "0x439c62F5C929C3e0a32C053295a3b8D432C3e0a3",
    points: 1950,
  },
  {
    id: 4,
    address: "0x123d35Cc6634C0532925a3b8D432C3e0a32C0789",
    points: 1720,
  },
  {
    id: 5,
    address: "0x567d35Cc6634C0532925a3b8D432C3e0a32C0456",
    points: 1540,
  },
  {
    id: 6,
    address: "0x891d35Cc6634C0532925a3b8D432C3e0a32C0123",
    points: 1320,
  },
  {
    id: 7,
    address: "0x234d35Cc6634C0532925a3b8D432C3e0a32C0890",
    points: 1180,
  },
  {
    id: 8,
    address: "0x678d35Cc6634C0532925a3b8D432C3e0a32C0567",
    points: 1050,
  },
  { id: 9, address: "0x345d35Cc6634C0532925a3b8D432C3e0a32C0234", points: 920 },
  {
    id: 10,
    address: "0x901d35Cc6634C0532925a3b8D432C3e0a32C0678",
    points: 850,
  },
];

const Leaderboard: React.FC<LeaderboardProps> = ({ isOpen, onClose }) => {
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
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-700/50 rounded-full transition-colors duration-200 group"
          >
            <X className="w-6 h-6 text-slate-400 group-hover:text-slate-200" />
          </button>
        </div>

        {/* Leaderboard Content */}
        <div className="relative p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-slate-800/30 backdrop-blur-sm border border-slate-600/30 rounded-xl mb-4 text-slate-300 font-medium text-sm">
            <div className="col-span-1">Rank</div>
            <div className="col-span-7">Address</div>
            <div className="col-span-4 text-right">Points</div>
          </div>

          {/* Leaderboard Entries */}
          <div className="space-y-3">
            {mockLeaderboardData.map((entry, index) => {
              const rank = index + 1;
              return (
                <div
                  key={entry.id}
                  className={`grid grid-cols-12 gap-4 px-6 py-4 backdrop-blur-sm border rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${getRankStyle(
                    rank
                  )}`}
                >
                  {/* Rank */}
                  <div className="col-span-1 flex items-center">
                    {getRankIcon(rank)}
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
                          ID: {entry.id}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Points */}
                  <div className="col-span-4 flex items-center justify-end">
                    <div className="text-right">
                      <div className="text-slate-100 font-bold text-lg">
                        {entry.points.toLocaleString()}
                      </div>
                      <div className="text-slate-400 text-xs">points</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Stats */}
          <div className="mt-8 pt-6 border-t border-slate-600/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-600/30 rounded-xl">
                <div className="text-2xl font-bold text-slate-100">
                  {mockLeaderboardData.length}
                </div>
                <div className="text-slate-400 text-sm">Total Participants</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-600/30 rounded-xl">
                <div className="text-2xl font-bold text-slate-100">
                  {mockLeaderboardData
                    .reduce((sum, entry) => sum + entry.points, 0)
                    .toLocaleString()}
                </div>
                <div className="text-slate-400 text-sm">Total Points</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-600/30 rounded-xl">
                <div className="text-2xl font-bold text-slate-100">
                  {Math.round(
                    mockLeaderboardData.reduce(
                      (sum, entry) => sum + entry.points,
                      0
                    ) / mockLeaderboardData.length
                  ).toLocaleString()}
                </div>
                <div className="text-slate-400 text-sm">Average Points</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
