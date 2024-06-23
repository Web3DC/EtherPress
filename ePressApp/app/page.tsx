import Image from "next/image";
import { Button } from "@/components/ui/button"
import HeaderComponent from "@/components/Header";
import HeroComponent from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <HeaderComponent />
      <HeroComponent />
    </div>
  );
}
