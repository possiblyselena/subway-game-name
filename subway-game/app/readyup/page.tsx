import Image from "next/image";
import Link from "next/link";

export default function ReadyUp() {

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex justify-center gap-4">
        <Image
          src="/assets/pngtitle.png"
          alt="Subway Game Logo"
          width={300}
          height={75}
        />
        <p>GAME CODE HERE</p>
      </div>
      <div className="flex justify-center gap-4">
        <Image src="/assets/4.png" alt="P1 metrocard on" width={300} height={75} />
        <Image src="/assets/5.png" alt="P2 metrocard off" width={300} height={75} />
        <Image src="/assets/6.png" alt="P3 metrocard off" width={300} height={75} />
      </div>

      <Link href="/join" className="mx-auto">
      <Image
        src="/assets/image.png"
        alt="Background"
        fill
        style={{ objectFit: 'cover', zIndex: -1 }}
      />
        <Image
          src="/assets/7.png"
          alt="start game"
          width={400}
          height={120}
          className="cursor-pointer"
        />
      </Link>
    </div>
  );
}
