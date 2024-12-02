import { NextRequest, NextResponse } from 'next/server'
import { home_card_data } from '../sample-database/feed-data'

export async function GET(request: NextRequest) {

  const url = request.nextUrl
  return NextResponse.json({
    status: 200,
    data: "This is the data of the second route request.",
    maindata : home_card_data
  })
}