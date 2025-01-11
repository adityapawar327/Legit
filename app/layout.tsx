"use client";
import { defineChain } from "viem";
import { Outfit } from "next/font/google";
import "./globals.css";

import { PrivyProvider } from "@privy-io/react-auth";
const font = Outfit({ subsets: ["latin"] });

const BitTorrent = defineChain({
  id: 1029,
  name: "BitTorrent Chain Donau",
  network: "BitTorrent Chain Donau",
  nativeCurrency: {
    decimals: 18,
    name: "BitTorrent Chain Donau",
    symbol: "BTTC",
  }, 
  rpcUrls: {
    default: {
      http: ["https://pre-rpc.bt.io/"],
    },
  } as any,
  blockExplorers: {
    default: { name: "Explorer", url: "https://testscan.bt.io" },
  },
}) as any;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Legit</title>
      </head>
      <body className={font.className}>
        <PrivyProvider
          appId="clwci9fzm00w7ro85bx6jarr5"
          config={{
            appearance: {
              theme: "dark",
              accentColor: "#9D00FF",
              logo: "https://cdn.hyprop.co.za/image/2021/7/21/2c150daf-3432-4a4b-b0b5-d9766e96f236/a3bb6174-a4aa-4f22-80f9-4ad0a81799e5.jpg?w=933&h=525&webp",
            },
            embeddedWallets: {
              createOnLogin: "users-without-wallets",
            },
            defaultChain: BitTorrent,
            supportedChains: [BitTorrent],
          }}
        >
          {children}
        </PrivyProvider>
      </body>
    </html>
  );
}
