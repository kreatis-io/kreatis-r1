"use client"

import Left from "./sections/left"
import Right from "./sections/right"
import { useState } from "react"

export default function Home() {
  const [title, setTitle] = useState("Kreatis")
  const [subTitle, setSubTitle] = useState("Web development agency.")

  return (
    <main
      className="bg-white gradient-grain h-screen w-screen"
    >
      <div className="xl:flex overflow-x-hidden ">
        <div className="z-50 block xl:w-[50vw] xl:sticky top-0 left-0 right-[50vw]">
          <div className="xl:w-[50vw]">
            <Left
              title={title}
              subTitle={subTitle}
            /></div>
        </div>
        <div className="xl:w-[100vw] flex justify-end">
          <Right setTitle={setTitle} setSubTitle={setSubTitle} />
        </div>
      </div>
    </main>
  )
}
