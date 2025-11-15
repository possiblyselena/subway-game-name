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
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="bg"></div>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">

      <div className="flex gap-1 mb-8 flex justify-center w-full">
          {titleLetters.map((letter, i) => {
            if (letter === " ")
              return <div key={i} className="w-3" />;

            return (
              <div
                key={i}
                className="subway-circle"
                style={{ backgroundColor: getRandomColour() }}
              >
                {letter}
              </div>
            );
          })}
        </div>
        <div className="mt-6 grid gap-4">
          <div className="grid grid-cols-2 gap-3"></div>
          <Link href="/host-game">
          <button className="rounded-2xl py-3 px-4 text-sm font-medium shadow-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
          host game
          </button>
          </Link>
          <Link href="/join-game">
          <button className="rounded-2xl py-3 px-4 text-sm font-medium shadow-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
            join game
          </button>
          </Link>
          

          <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
          <label className="block text-xs text-zinc-500 dark:text-zinc-400">game difficulty</label>
          <select className="mt-2 w-full rounded-lg p-2 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm">
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
          </select>
          </div>
          </div>

          {/* <button  className="rounded-2xl py-3 px-4 text-sm font-medium shadow-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">game start</button> */}
         
  
        </div>
      </main>
    </div>
  );
}
