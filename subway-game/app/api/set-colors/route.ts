import { PrismaClient } from '@/generated/prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const { roomId, w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12 } = await request.json()
    
    // Check if room exists, if not create it
    let room = await prisma.room.findUnique({
      where: { id: roomId }
    })
    
    if (!room) {
      // Create room if it doesn't exist
      room = await prisma.room.create({
        data: {
          id: roomId,
          hasuser1: true,
          hasuser2: false,
          hasuser3: false,
          user1task: "",
          user2task: "",
          user3task: "",
          user1done: false,
          user2done: false,
          user3done: false,
          w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12,
          c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12
        }
      })
    } else {
      // Update existing room
      room = await prisma.room.update({
        where: { id: roomId },
        data: {
          w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12,
          c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12
        }
      })
    }
    
    return NextResponse.json({ success: true, room })
  } catch (error) {
    console.error('Error saving colors:', error)
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}
