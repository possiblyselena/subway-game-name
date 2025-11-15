import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">

        <div className="circle-row">
        <div className="subway-circle">S</div>
        <div className="subway-circle">U</div>
        <div className="subway-circle">B</div>
        <div className="subway-circle">W</div>
        <div className="subway-circle">A</div>
        <div className="subway-circle">Y</div>
        <div className="w-2"></div>
        <div className="subway-circle">G</div>
        <div className="subway-circle">A</div>
        <div className="subway-circle">M</div>
        <div className="subway-circle">E</div>
        </div>

        <div className="mt-6 grid gap-4">
          <div className="grid grid-cols-2 gap-3"></div>
          <button className="rounded-2xl py-3 px-4 text-sm font-medium shadow-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
            host game
          </button>
          <button className="rounded-2xl py-3 px-4 text-sm font-medium shadow-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
            join game
          </button>
          

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

          <button  className="rounded-2xl py-3 px-4 text-sm font-medium shadow-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">game start</button>
         
  
        </div>
      </main>
    </div>
  );
}
