"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { 
  RainbowKitProvider,
  lightTheme, 
  Theme 
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { config } from "@/lib/wagmi";
import merge from 'lodash.merge'; 

const queryClient = new QueryClient();

// -> 3. Defina seu tema customizado
const myTheme = merge(lightTheme(), {
  colors: {
    accentColor: '#0066ffff',
    accentColorForeground: 'white',
    connectButtonBackground: 'transparent',
    connectButtonText: '#ffffffff',
  },
  radii: {
    connectButton: '8px', 
    modal: '8px',
  },
  shadows: {
    connectButton: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  }
} as Theme);


export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={myTheme} locale="en-US">
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}