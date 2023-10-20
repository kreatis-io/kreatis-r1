"use client"

import { motion } from "framer-motion"
import Left from "./sections/left"
import Right from "./sections/right"

export default function Home() {
  return (
    <main
      className="bg-white gradient-grain h-screen w-screen"
    >

      <div className="xl:flex overflow-x-hidden ">
        <div className="hidden xl:z-50 xl:block xl:w-[50vw] sticky top-0 left-0 right-[50vw]">
          <div className="w-[50vw]">
            <Left /></div>
        </div>
        <div className="xl:w-[100vw] flex justify-end">
          <Right />
        </div>
      </div>
    </main>
  )
}
