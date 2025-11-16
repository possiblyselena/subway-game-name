import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const colours = [
          "#00985F",
          "#4D5357",
          "#6E3219",
          "#CE8E00",
          "#FF6319",
          "#006983",
          "#00AF3F",
          "#0039A6",
          "#C60C30",
          "#A626AA",
          "#00A1DE"
        ];

  function getRandomColour() {
    return colours[Math.floor(Math.random() * colours.length)];
  }

   const titleLetters = ["S","U","B","W","A","Y"," ","G","A","M","E"];

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Image
        src="/assets/image.png"
        alt="Background"
        fill
        style={{ objectFit: 'cover', zIndex: -1 }}
      />
  
      <main className="flex h-screen w-full items-center justify-center font-sans flex-col px-10 gap-1" style={{ position: 'relative', zIndex: 1 }}>
        <Image
          src="/assets/pngtitle.png"
          alt="Subway Game Logo"
          width={600}
          height={150}
        />

        <Link href="/join" className="mx-auto">
          <Image
            src="/assets/joingame.png"
            alt="Join Game"
            width={400}
            height={120}
            className="cursor-pointer"
          />
        </Link>
      </main>
    </div>
  );
}
