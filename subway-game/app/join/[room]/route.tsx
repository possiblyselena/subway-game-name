import { NextResponse } from 'next/server'
import { PrismaClient } from '@/generated/prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  const room = await prisma.room.findUnique({
    where: { id: 'vera' }
  })


  if(room?.hasuser2 == true){
        if(room?.hasuser3 == true){
            return NextResponse.redirect(new URL('/filled-page', request.url))
        }
        else 
        {
            await prisma.room.update({
             where: { id: 'vera' },
             data: { hasuser3: true }
            })
            return NextResponse.redirect(new URL('/level1/p3', request.url))
        }
  }
  else{
    await prisma.room.update({
      where: { id: 'vera' },
      data: { hasuser2: true }
    })
    return NextResponse.redirect(new URL('/level1/p2', request.url))
  }
}