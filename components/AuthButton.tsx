"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AuthButton = () => {
  const { ready, authenticated, login, logout, user } = usePrivy();
  const router = useRouter();
  const [showLoadingModal, setShowLoadingModal] = useState(false);

  // Redirect to marketplace when authenticated
  useEffect(() => {
    if (ready && authenticated) {
      setShowLoadingModal(false);
      router.push("/marketplace");
    }
  }, [ready, authenticated, router]);

  const handleGetStarted = async () => {
    setShowLoadingModal(true);
    try {
      await login();
    } catch (error) {
      console.error("Login failed:", error);
      setShowLoadingModal(false);
    }
  };

  return (
    <>
      {/* GET STARTED Button - Always visible and clickable */}
      <button
        onClick={handleGetStarted}
        className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white text-lg font-medium hover:bg-white/20 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105"
      >
        GET STARTED
      </button>

      {/* Loading Modal */}
      {showLoadingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-gray-900/95 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl max-w-sm w-full mx-4">
            <div className="flex flex-col items-center space-y-6">
              {/* Spinner */}
              <div className="w-12 h-12 border-3 border-white/20 border-t-white rounded-full animate-spin"></div>

              {/* Text */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Connecting...
                </h3>
                <p className="text-white/60 text-sm">
                  Please wait while we set up your account
                </p>
              </div>

              {/* Cancel Button */}
              <button
                onClick={() => setShowLoadingModal(false)}
                className="text-white/60 hover:text-white text-sm underline transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal - When authenticated */}
      {ready && authenticated && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-gray-900/95 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl max-w-sm w-full mx-4">
            <div className="flex flex-col items-center space-y-6">
              {/* Success Icon */}
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Text */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Welcome!
                </h3>
                <p className="text-white/60 text-sm">
                  Redirecting to marketplace...
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthButton;
