"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button"
import HeaderComponent from "@/components/Header";
import HeroComponent from "@/components/Hero";

import { LATEST_PUBLIC_RESOURCES } from "@/constants/latestPublicResources";
import LatestPressComponent from "@/components/LatestPress";
import { LATEST_PUBLIC_MEMBER_RESOURCES } from "@/constants/latestMemberPublicResources";

import { useContext, JSX, SVGProps } from "react"
import { GlobalContext } from "@/context/GlobalContext";

export default function Home() {

  const {userIsMember, setUserIsMember} = useContext(GlobalContext);

//  console.log("* User is Member: ", userIsMember);

  return (
    <div>
      <HeaderComponent />
      <HeroComponent />
      { (userIsMember) && (
        <LatestPressComponent {...LATEST_PUBLIC_MEMBER_RESOURCES} />
      )}
      <LatestPressComponent {...LATEST_PUBLIC_RESOURCES} />
    </div>
  );
}
