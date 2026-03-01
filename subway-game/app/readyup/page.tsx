"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ReadyUp() {
  const [player, setPlayer] = useState(0);

  function directPlayer(): string {
    switch (player) {
      case 1:
         return "/level2/p1";
      case 2: 
        return "/level2/p2";
      case 3: 
        return "/level2/p3";
      default:
        return "/readyup";
    }
  }

  return (
    <div className="flex flex-col items-center gap-8 bg-[url('/assets/image.png')] bg-cover min-h-screen p-4">
      <div className="flex justify-center gap-4">
        <Image
          src="/assets/pngtitle.png"
          alt="Subway Game Logo"
          width={300}
          height={75}
        />
      </div>
      <div className="text-4xl bg-white">
        <h2>Choose your player!</h2>
      </div>
      <div className="flex justify-center gap-4">
          <Image
            onClick={() => setPlayer(1)}
            src="/assets/4.png"
            alt="P1 metrocard off"
            width={300}
            height={75}
            className="cursor-pointer"
          />
          <Image
           onClick={() => setPlayer(2)}
            src="/assets/8.png"
            alt="P2 metrocard off"
            width={300}
            height={75}
            className="cursor-pointer"
          />
          <Image
            onClick={() => setPlayer(3)}
            src="/assets/9.png"
            alt="P3 metrocard off"
            width={300}
            height={75}
            className="cursor-pointer"
          />
      </div>

      <div className="relative w-full h-64 flex items-center justify-center">
        <Link href={directPlayer()}>
          <Image
            src="/assets/7.png"
            alt="start game"
            width={400}
            height={120}
            className="cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
}
