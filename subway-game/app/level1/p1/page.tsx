'use client'

import Image from 'next/image'
import Link from "next/link";
import React, { useState, useEffect } from 'react';

const colors = ['red', 'blue', 'green', 'purple', 'orange', 'yellow'];

export default function P1() {
    // Generate random colors and words
    const c1 = colors[Math.floor(Math.random() * colors.length)];
    const c2 = colors[Math.floor(Math.random() * colors.length)];
    const c3 = colors[Math.floor(Math.random() * colors.length)];
    const c4 = colors[Math.floor(Math.random() * colors.length)];
    
    const w1 = colors[Math.floor(Math.random() * colors.length)];
    const w2 = colors[Math.floor(Math.random() * colors.length)];
    const w3 = colors[Math.floor(Math.random() * colors.length)];
    const w4 = colors[Math.floor(Math.random() * colors.length)];
    const [buttonWords, setButtonWords] = useState<string[]>([]);
    const [buttonColors, setButtonColors] = useState<string[]>([]);
    const [selectedButtons, setSelectedButtons] = useState<number[]>([]);
    const [showInstructions, setShowInstructions] = useState(true);
    const [showColors, setShowColors] = useState(false);
    const [showColors2, setShowColors2] = useState(false);
    const [showColors3, setShowColors3] = useState(false);
    const [showColors4, setShowColors4] = useState(false);
    const [showColors5, setShowColors5] = useState(false);


    useEffect(() => {
        // Save random colors to database, then fetch for buttons
        const setupGame = async () => {
            try {
                // First, save the random colors to the database
                const saveResponse = await fetch('/api/set-colors', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        roomId: 'vera',
                        w1, w2, w3, w4,
                        w5: colors[Math.floor(Math.random() * colors.length)],
                        w6: colors[Math.floor(Math.random() * colors.length)],
                        w7: colors[Math.floor(Math.random() * colors.length)],
                        w8: colors[Math.floor(Math.random() * colors.length)],
                        w9: colors[Math.floor(Math.random() * colors.length)],
                        w10: colors[Math.floor(Math.random() * colors.length)],
                        w11: colors[Math.floor(Math.random() * colors.length)],
                        w12: colors[Math.floor(Math.random() * colors.length)],
                        c1, c2, c3, c4,
                        c5: colors[Math.floor(Math.random() * colors.length)],
                        c6: colors[Math.floor(Math.random() * colors.length)],
                        c7: colors[Math.floor(Math.random() * colors.length)],
                        c8: colors[Math.floor(Math.random() * colors.length)],
                        c9: colors[Math.floor(Math.random() * colors.length)],
                        c10: colors[Math.floor(Math.random() * colors.length)],
                        c11: colors[Math.floor(Math.random() * colors.length)],
                        c12: colors[Math.floor(Math.random() * colors.length)]
                    })
                });
                
                const saveData = await saveResponse.json();
                console.log('Save response:', saveData);
                
                // Then fetch and set button words and colors
                const response = await fetch('/api/get-room?id=vera');
                const room = await response.json();
                console.log('Room data:', room);
                
                // Create pairs of words and their corresponding colors
                const wordColorPairs = [
                    { word: room.w1, color: room.c1 },
                    { word: room.w2, color: room.c2 },
                    { word: room.w3, color: room.c3 },
                    { word: room.w4, color: room.c4 },
                    { word: room.w5, color: room.c5 },
                    { word: room.w6, color: room.c6 },
                    { word: room.w7, color: room.c7 },
                    { word: room.w8, color: room.c8 },
                    { word: room.w9, color: room.c9 },
                    { word: room.w10, color: room.c10 },
                    { word: room.w11, color: room.c11 },
                    { word: room.w12, color: room.c12 }
                ].filter(pair => pair.word && pair.word !== ''); // Remove empty pairs
                
                console.log('Word-color pairs:', wordColorPairs);
                
                // Shuffle and pick 4 random pairs
                const shuffled = [...wordColorPairs].sort(() => Math.random() - 0.5);
                const selected = shuffled.slice(0, 4);
                
                console.log('Selected pairs:', selected);
                
                setButtonWords(selected.map(pair => pair.word));
                setButtonColors(selected.map(pair => pair.color));
            } catch (error) {
                console.error('Error setting up game:', error);
            }
        };
        
        setupGame();
        
        // Hide instructions after 3 seconds
        const timer1 = setTimeout(() => {
            setShowInstructions(false);
            setShowColors(true);
        }, 3000);
        
        const timer2 = setTimeout(() => {
            setShowColors2(true);
            setShowColors(false);

        }, 5000);
        
        const timer3 = setTimeout(() => {
            setShowColors3(true);
            setShowColors2(false);

        }, 7000);

         const timer4 = setTimeout(() => {
            setShowColors4(true);
            setShowColors3(false);

        }, 9000);
        
        const timer5 = setTimeout(() => {
            setShowColors4(false);
            setShowColors5(true);

        }, 11000);


        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            clearTimeout(timer5);

        };
    }, []);

    return (
        <div style={{ position: 'absolute', minHeight: '100vh', minWidth: '100vw', backgroundRepeat: 'no-repeat' }}>
            <Image
                src="/assets/image.png"
                alt="Background"
                fill
                style={{ objectFit: 'cover', zIndex: -1 }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
                <h1 className="game-title"> </h1>
                <h1>Correct the Color 1 - P1</h1>
               <div className="colors">
                    {showColors && (
                        <p style={{ color: c1, fontSize: '140px'}}>{w1}</p>
                    )}
                </div>
                 <div className="colors">
                    {showColors2 && (
                        <p style={{ color: c2, fontSize: '140px'}}>{w2}</p>
                        
                    )}
                </div>
                <div className="colors">
                    {showColors3 && (
                        <p style={{ color: c3, fontSize: '140px'}}>{w3}</p>
                    )}
                </div>
                <div className="colors">
                    {showColors4 && (
                        <p style={{ color: c4, fontSize: '140px' }}>{w4}</p>
                    )}
                </div>

                {showColors5 && buttonWords.length > 0 && (
                    <div style={{ display: 'flex', gap: '20px', marginTop: '50px', justifyContent: 'center' }}>
                        <button 
                            className="color-button" 
                            style={{ 
                                color: buttonColors[0],
                                backgroundColor: selectedButtons.includes(0) ? '#ddd' : '#fff',
                                border: selectedButtons.includes(0) ? '3px solid #333' : '2px solid #333'
                            }}
                            onClick={() => setSelectedButtons(prev => 
                                prev.includes(0) ? prev.filter(i => i !== 0) : [...prev, 0]
                            )}
                        >
                            {buttonWords[0]}
                        </button>
                        <button 
                            className="color-button" 
                            style={{ 
                                color: buttonColors[1],
                                backgroundColor: selectedButtons.includes(1) ? '#ddd' : '#fff',
                                border: selectedButtons.includes(1) ? '3px solid #333' : '2px solid #333'
                            }}
                            onClick={() => setSelectedButtons(prev => 
                                prev.includes(1) ? prev.filter(i => i !== 1) : [...prev, 1]
                            )}
                        >
                            {buttonWords[1]}
                        </button>
                        <button 
                            className="color-button" 
                            style={{ 
                                color: buttonColors[2],
                                backgroundColor: selectedButtons.includes(2) ? '#ddd' : '#fff',
                                border: selectedButtons.includes(2) ? '3px solid #333' : '2px solid #333'
                            }}
                            onClick={() => setSelectedButtons(prev => 
                                prev.includes(2) ? prev.filter(i => i !== 2) : [...prev, 2]
                            )}
                        >
                            {buttonWords[2]}
                        </button>
                        <button 
                            className="color-button" 
                            style={{ 
                                color: buttonColors[3],
                                backgroundColor: selectedButtons.includes(3) ? '#ddd' : '#fff',
                                border: selectedButtons.includes(3) ? '3px solid #333' : '2px solid #333'
                            }}
                            onClick={() => setSelectedButtons(prev => 
                                prev.includes(3) ? prev.filter(i => i !== 3) : [...prev, 3]
                            )}
                        >
                            {buttonWords[3]}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
