"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function P1() {


  const answer1 = "duolingo";
  const answer2 = "orpheus"; 
  const answer3 = "athena";

  const [guesses, setGuesses] = useState({
    one: "",
    two: "",
    three: ""
  }
  );


  function checkAnswer(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setGuesses(prev => ({
      ...prev,
      [name]: value
    }));
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">

    <Image
                src="/assets/image.png"
                alt="Background"
                fill
                style={{ objectFit: 'cover', zIndex: -1 }}
            />
      <h1>Level 3 - P1</h1>

    <div className="text-xl items-center justify-center grid grid-cols-2 grid-rows-3 gap-4 w-100 bg-purple-200 p-10">
      <h1>Dinner</h1>
      <input type="text"
        name="one"
        value={guesses.one}
        onChange={checkAnswer}
        />

      <h1>Mascot</h1>
      <input type="text"
        name="two"
        value={guesses.two}
        onChange={checkAnswer}
        />

      <h1>Initiative</h1>
      <input type="text"
        name="three"
        value={guesses.three}
        onChange={checkAnswer}
      />
    </div>
    
    </div>
  );
}
