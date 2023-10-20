import { motion, useInView } from "framer-motion"
import SumbitButton from "../components/submitButton";
import { submit } from "../actions/submission";
import { Montserrat } from "next/font/google"
// @ts-expect-error
import { experimental_useFormState as useFormState } from 'react-dom'
import { useEffect, useRef } from "react";

const montserrat = Montserrat({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

function Contact({
    customRef
}: {
    customRef: React.RefObject<HTMLDivElement>
}) {

    const ref = useRef(null)
    const isInView = useInView(ref);

    const formRef = useRef<HTMLFormElement>(null);

    const [state, formAction] = useFormState(submit, {
        message: null,
    })

    const ref2 = useRef(null)
    const isInView2 = useInView(ref2);


    useEffect(() => {
        if (!state) return;

        if (!state.message) return;

        if (state.message === "err") {
            alert("There was an error sending your message. Please try again later, or use the email address provided.")
            return;
        }
        else if (state.message) {
            formRef.current?.reset();
        }
    }, [state])

    return (
        <section ref={customRef} className='bg-gray-100 p-12 xl:py-36 xl:px-24 h-screen xl:h-[120vh] flex flex-col justify-center' id="contact">
            <motion.h3
                initial={{ opacity: 0, y: 100 }}
                animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
                ref={ref2}
                className={"xl:hidden text-xl xl:text-3xl font-light mb-12 w-full " + montserrat.className}>Contact us to get started.</motion.h3>

            <div className="w-full">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                    ref={ref}
                >
                    <form ref={formRef} action={formAction} className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" name="email" id="email" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500 
                            focus:outline-none
                            " placeholder="contact@kreatis.io" required />
                        </div>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                            <input type="text" name="name" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:border-slate-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500 " placeholder="Catherine" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea name="message" id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:border-slate-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500" placeholder="Ask us anything, or provide a project description. We will get in contact with you to start working."></textarea>
                        </div>
                        <SumbitButton>Send</SumbitButton>
                    </form>
                </motion.div></div>

        </section >
    );
}

export default Contact;