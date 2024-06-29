"use client";

import { thirdwebClient } from "@/utils/thirdweb";
import { baseSepolia, defineChain } from "thirdweb/chains";

import { createWallet, } from "thirdweb/wallets";
import { ConnectButton, } from "thirdweb/react";

import { useContext } from 'react';
import { useAppContext } from "@/context/GlobalContext";

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

  const {userIsMember, setUserIsMember} = useAppContext();
  const {userIsWriter, setUserIsWriter} = useAppContext();
  const {userIsAdmin, setUserIsAdmin} = useAppContext();

  const handleConnect = (userInfo: any) => {
    // Handle the disconnect event here
    const account = userInfo.getAccount();
    //
    // Check if user is Admin, Writer or Member
    const memberWhiteList = process.env.NEXT_PUBLIC_MEMBER_ADDRESS_WHITE_LIST || "";
    if (memberWhiteList.length > 0) {
      const memberList = memberWhiteList.split(",");
      if (account && account.address) {
        if (memberList.includes(account.address)) {
          console.log("User is Member: ", account.address);
          setUserIsMember(true);
        }  
      }
    }

    const writerWhiteList = process.env.NEXT_PUBLIC_WRITER_ADDRESS_WHITE_LIST || "";
    if (writerWhiteList.length > 0) {
      const writerList = writerWhiteList.split(",");
      if (account && account.address) {
        if (writerList.includes(account.address)) {
          console.log("User is Writer: ", account.address);
          setUserIsWriter(true);
        }  
      }
    }

    const adminWhiteList = process.env.NEXT_PUBLIC_ADMIN_ADDRESS_WHITE_LIST || "";
    if (adminWhiteList.length > 0) {
      const adminList = adminWhiteList.split(",");
      if (account && account.address) {
        if (adminList.includes(account.address)) {
          console.log("User is Admin: ", account.address);
          setUserIsAdmin(true);
        }
      }
    }

    // wait 1 second for the state to be updated
    setTimeout(() => {
      console.log("User is Admin: ", userIsAdmin);
      console.log("User is Writer: ", userIsWriter);
      console.log("User is Member: ", userIsMember);
    }, 1000);

    //
    // console.log("User is Admin: ", userIsAdmin);
    // console.log("User is Writer: ", userIsWriter);
    // console.log("User is Member: ", userIsMember);
    //


  };  

  const handleDisconnect = () => {
    // Handle the disconnect event here
    console.log("Wallet disconnected");
    setUserIsMember(false);
    setUserIsWriter(false);
    setUserIsAdmin(false);
    //
    console.log("User is Admin: ", userIsAdmin);
    console.log("User is Writer: ", userIsWriter);
    console.log("User is Member: ", userIsMember);
    //
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
    )
};

export default ConnectButtonComponent;