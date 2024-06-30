"use client";

import React from 'react';
import { createWallet } from "thirdweb/wallets";
import { ConnectButton } from "thirdweb/react";
import { useAppContext } from "@/context/GlobalContext";
import { thirdwebClient } from "@/utils/thirdweb";
import { baseSepolia, defineChain } from "thirdweb/chains";

const walletsSetup = [
  createWallet("com.coinbase.wallet", {
    walletConfig: {
      options: "smartWalletOnly",
    },    
  }),
];

interface TitleComponentProps {
  labelButton: string;
}

const ConnectButtonComponent: React.FC<TitleComponentProps> = ({ labelButton }) => {
  const { setUserIsMember, setUserIsWriter, setUserIsAdmin } = useAppContext();

  const handleConnect = (userInfo: any) => {
    const account = userInfo.getAccount();

    if (account && account.address) {
      const address = account.address.toLowerCase(); // Normalize address to lowercase

      // Check if the user is in the member whitelist
      const memberWhiteList = process.env.NEXT_PUBLIC_MEMBER_ADDRESS_WHITE_LIST || "";
      if (memberWhiteList.length > 0) {
        const memberList = memberWhiteList.split(",").map(addr => addr.trim().toLowerCase());
        if (memberList.includes(address)) {
          console.log("User is Member: ", address);
          setUserIsMember(true);
        } else {
          setUserIsMember(false);
        }
      }

      // Check if the user is in the writer whitelist
      const writerWhiteList = process.env.NEXT_PUBLIC_WRITER_ADDRESS_WHITE_LIST || "";
      if (writerWhiteList.length > 0) {
        const writerList = writerWhiteList.split(",").map(addr => addr.trim().toLowerCase());
        if (writerList.includes(address)) {
          console.log("User is Writer: ", address);
          setUserIsWriter(true);
        } else {
          setUserIsWriter(false);
        }
      }

      // Check if the user is in the admin whitelist
      const adminWhiteList = process.env.NEXT_PUBLIC_ADMIN_ADDRESS_WHITE_LIST || "";
      if (adminWhiteList.length > 0) {
        const adminList = adminWhiteList.split(",").map(addr => addr.trim().toLowerCase());
        if (adminList.includes(address)) {
          console.log("User is Admin: ", address);
          setUserIsAdmin(true);
        } else {
          setUserIsAdmin(false);
        }
      }
    }
  };

  const handleDisconnect = () => {
    // Handle the disconnect event here
    console.log("Wallet disconnected");
    setUserIsMember(false);
    setUserIsWriter(false);
    setUserIsAdmin(false);
  };

  return (
    <ConnectButton
      client={thirdwebClient}
      wallets={walletsSetup}
      theme={"light"}
      connectButton={{ label: labelButton || "Connect" }}
      connectModal={{
        size: "compact",
        title: "Instant Cash",
        showThirdwebBranding: false,
      }}
      chain={defineChain(baseSepolia)}
      onConnect={handleConnect}
      onDisconnect={handleDisconnect}
    />
  );
};

export default ConnectButtonComponent;
