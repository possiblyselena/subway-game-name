"use client";

import Image from 'next/image'
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

export default function Join() {
    const [room, setRoomId] = useState("");

    //joining room
    async function joinRoom() {
        redirect(`/join/${room}`); // go to room
    }
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Image
        src="/assets/image.png"
        alt="Background"
        fill
        style={{ objectFit: 'cover', zIndex: -1 }}
      />
      <div className ="flex flex-col items-center justify-center min-h-screen w-full p-2" style={{ position: 'relative', zIndex: 1 }}>
          <Image src="/assets/pngtitle.png" alt="Subway Game Logo" width={600} height={150}/>
          <div className="background-white">
              <div className="background-white-500">
                  <input
                  value={room}
                  onChange={(e) => setRoomId(e.target.value)}
                  placeholder="Enter Room ID"
              />
              </div>
              <div className="background-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-2xl">
                  <Link href="/readyup" className="mx-auto no-underline">
      <Image
        src="/assets/joinroom.png"
        alt="Join Room"
        width={400}
        height={120}
        className="cursor-pointer"
      />
    </Link>
              </div>
          </div>
      </div>
    </div>
    );
}