import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function Piece(
    {
        title,
        description,
        image,
        link,
        backgroundClassName,
        textClassName,
        index,
        mobileImage
    }: {
        title: string,
        description: string,
        image: string,
        link: string,
        backgroundClassName: string,
        textClassName: string,
        index: number,
        mobileImage: string
    }
) {

    const refs = { text: useRef(null), all: useRef(null) };
    const isInView = { text: useInView(refs.text), all: useInView(refs.all) }

    return <div className={`${backgroundClassName} bg-fixed w-full bg-cover bg-center bg-no-repeat`}> <div className={`backdrop-blur-sm xl:backdrop-blur-none flex flex-col xl:justify-center items-center px-12 py-24 xl:py-36 xl:px-14 xl:max-w-[50vw] ${(index === 0 ? "xl:h-[200vh]" : "min-h-[150vh]")}`}>
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={
                isInView.all ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{
                duration: 1,
                ease: "easeInOut",
                delay: index === 0 ? 0.5 : 0
            }}
            ref={refs.all}
            className="flex flex-col gap-4 xl:gap-2">
            <div className="
            flex
            flex-col
            gap-4
            items-center
            ">
                <Image
                    onClick={
                        () => {
                            window.open(link, "_blank")
                        }
                    }
                    className="xl:hidden bg-slate-950 cursor-pointer" src={mobileImage} alt={title} width={700} height={700 * 9 / 16} />
                <Image
                    onClick={
                        () => {
                            window.open(link, "_blank")
                        }
                    }
                    className="bg-slate-950 cursor-pointer" src={image} alt={title} width={800} height={450} /></div>
            <motion.div
                className={"flex justify-between text-sm " + textClassName}>
                <motion.p initial={{ opacity: 0, x: 20 }}
                    animate={isInView.text ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                    }}
                    ref={refs.text}
                    className="font-semibold"
                >{title}</motion.p>
                <Link href={link} target="_blank" className="">Visit</Link>
            </motion.div>
        </motion.div>
    </div></div >
}