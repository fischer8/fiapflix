import { cardsData } from "@/app/Components";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ info: cardsData });
}
