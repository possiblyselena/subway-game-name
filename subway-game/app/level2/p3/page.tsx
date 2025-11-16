"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function P1() {

  const [selected, setSelected] = useState(Array(36).fill(false));

  const path = [0, 1, 2, 3, 4, 10, 16, 19, 20, 21, 22, 25, 27, 28, 31];

  function checkAnswer(selectedState: boolean[]) {
    const userPattern = selectedState
      .map((value, i) => (value ? i : null))
      .filter((v) => v !== null);

    const isCorrect =
      userPattern.length === path.length &&
      path.every((i) => userPattern.includes(i));

    return isCorrect;
  }
  
  function toggleBox(i: number) {
    const copy = [...selected]; 
    copy[i] = !copy[i];

    const answeredCorrectly = checkAnswer(copy);


    setSelected(copy);

    if (answeredCorrectly) {
      alert("🎉 Correct puzzle solution!");
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-sans">
      <Image
        src="/assets/image.png"
        alt="Background"
        fill
        style={{ objectFit: 'cover', zIndex: -1 }}
      />
      
      <h1>Level 2 - P1</h1>
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-6">
          {selected.map((isSelected, i) => (
        <div
          key={i}
          onClick={() => toggleBox(i)}
          className={`w-15 h-15 cursor-pointer transition border
            ${isSelected ? "bg-red-500 border-red-700" : "bg-yellow-200 border-gray-400"}`}
          />
            ))}
      </div>
        <Image src="/assets/3.png" alt="map3" width={400} height={400}/>

      </div>
        
    
    </div>
  )
}