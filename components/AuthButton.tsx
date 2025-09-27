"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AuthButton = () => {
  const { ready, authenticated, login, user } = usePrivy();
  const router = useRouter();
  //   const [showLoadingModal, setShowLoadingModal] = useState(false);

  // Redirect to marketplace when authenticated
  //   useEffect(() => {
  //     if (ready && authenticated) {
  //       setShowLoadingModal(false);
  //       router.push("/marketplace");
  //     }
  //   }, [ready, authenticated, router]);

  const handleGetStarted = async () => {
    if (ready && authenticated) {
      router.push("/marketplace");
    }

    // setShowLoadingModal(true);
    try {
      await login({});
      if (user) {
        router.push("/marketplace");
      }
    } catch (error) {
      console.error("Login failed:", error);
      //   setShowLoadingModal(false);
    }
  };

  return (
    <>
      {/* GET STARTED Button - Always visible and clickable */}
      <button
        onClick={() => router.push("/marketplace")}
        className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white text-lg font-medium hover:bg-white/20 transition-all duration-300 shadow-2xl"
      >
        GET STARTED
      </button>

      {/* Success Modal - When authenticated */}
    </>
  );
};

export default AuthButton;
