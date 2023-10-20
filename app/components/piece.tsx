import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Piece(
    {
        title,
        description,
        image,
        link,
        backgroundClassName,
        textClassName
    }: {
        title: string,
        description: string,
        image: string,
        link: string,
        backgroundClassName: string,
        textClassName: string
    }
) {
    return <div className={backgroundClassName}>
        <div className={"hidden h-[200vh] lg:flex justify-center items-center py-36 px-12 "}>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 3
                }}
                className="flex flex-col gap-2">
                <Image src={image} alt={title} width={1920} height={1080} />
                <motion.div className={"flex justify-between text-sm " + textClassName}>
                    <p>{title}</p>
                    <Link href={link} target="_blank" className="underline">Visit</Link>
                </motion.div>
            </motion.div>
        </div></div>
}