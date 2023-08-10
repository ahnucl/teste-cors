'use client'

import { useEffect, useState } from "react"
import { ClientSide } from "./client-side"
import { ClientSideCallingServer } from "./server-side"

export default function Home() {
  return (
    <div className="h-screen bg-slate-950">
      <ClientSide />
      <ClientSideCallingServer />
    </div>
  )
}
