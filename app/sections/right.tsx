import { useEffect, useRef, useState } from "react";
import Portfolio from "./portfolio";
import Why from "./why";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Contact from "./contact";

export default function Right({
    setTitle, setSubTitle
}: {
    setTitle: (title: string) => void,
    setSubTitle: (subTitle: string) => void
}) {

    const [text, setText] = useState("Projects");
    const refs = {
        portfolio: useRef(null),
        why: useRef(null),
        contact: useRef(null)
    }
    const isInView = {
        portfolio: useInView(refs.portfolio),
        why: useInView(refs.why),
        contact: useInView(refs.contact)
    }

    useEffect(() => {
        switch (true) {
            case isInView.portfolio:
                setText("Projects")
                setTitle("Kreatis")
                setSubTitle("is a web development agency.")
                break;
            case isInView.why:
                setText("Why do I need a website?")
                setTitle("reasons")
                setSubTitle("to have a website.")
                break;
            case isInView.contact:
                setText("contact@kreatis.io")
                setTitle("contact")
                setSubTitle("us to get started.")
                break;
            default:
                setText("Projects")
                setTitle("Kreatis")
                setSubTitle("web development agency.")
                break;
        }
        console.log(refs)
        console.log(isInView)
    }, [isInView, refs, setSubTitle, setTitle])

    return <motion.div
        initial={{
            width: "0vw",
        }}
        animate={{
            width: "100%",
        }}
        transition={{
            duration: 0.5,
            ease: "easeInOut",
        }}
        className="bg-white xl:bg-slate-200 h-screen w-full">
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                key={text}
                className="z-50 invert text-invert hidden xl:block text-sm absolute top-12 right-8 ">
                <div className="write-vertical xl:flex gap-4 items-center justify-center">
                    <div className="w-[1px] h-24 bg-slate-100 mix-blend-difference invert backdrop-invert " />{text}</div>
            </motion.div>
        </AnimatePresence>

        <Portfolio key="port" customRef={refs.portfolio} />
        <Why key="why" customRef={refs.why} />
        <Contact key="contact" customRef={refs.contact} />
    </motion.div>
}