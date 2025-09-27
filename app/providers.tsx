"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from '@privy-io/wagmi';
import { wagmiConfig } from "@/lib/configs/wagmiConfig";
import { polygonAmoy } from "wagmi/chains";

const queryClient = new QueryClient();
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
      config={{
        embeddedWallets: {
          ethereum: {
            createOnLogin: "users-without-wallets",
          },
        },
        defaultChain: polygonAmoy, 
        appearance: {
          theme: "dark",
          accentColor: "#ffffff",
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  );
}
