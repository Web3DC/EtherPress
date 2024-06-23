import Image from "next/image";
import { Button } from "@/components/ui/button"
import HeaderComponent from "@/components/Header";
import HeroComponent from "@/components/Hero";

import { LATEST_PUBLIC_RESOURCES } from "@/constants/latestPublicResources";
import LatestPressComponent from "@/components/LatestPress";
import { LATEST_PUBLIC_MEMBER_RESOURCES } from "@/constants/latestMemberPublicResources";

export default function Home() {
  return (
    <div>
      <HeaderComponent />
      <HeroComponent />
      <LatestPressComponent {...LATEST_PUBLIC_MEMBER_RESOURCES} />
      <LatestPressComponent {...LATEST_PUBLIC_RESOURCES} />
    </div>
  );
}
