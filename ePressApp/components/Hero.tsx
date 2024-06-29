"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Link from "next/link"
import Image from "next/image";
import { useActiveAccount } from "thirdweb/react";

import { HERO_CONTENT } from "../constants/heroInfo";
import ConnectButtonComponent from "./ConnectButton";

export default function HeroComponent() {

  const account = useActiveAccount();

  return (
    <section className=" py-12 lg:my-6 mx-8">
      <div className="container px-4 md:px-6">
        <Carousel className="w-full">
          <CarouselContent>

            { HERO_CONTENT.map((content, index) => (
                <CarouselItem key={index}>
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <Image
                        src={content.image}
                        width="550"
                        height="550"
                        alt="Hero"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-auto"
                    />
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                            {content.title}
                        </h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                            {content.description}
                        </p>
                        </div>

                        { !(account?.address) && (
                          <div className="w-12">
                            <ConnectButtonComponent labelButton={content.buttonTitle}/>
                          </div>
                        )}
                    </div>
                    </div>
                </CarouselItem>
            ))}

          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}