"use client"

// @ts-expect-error
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

function SumbitButton({ children }: { children: any }) {

    const { pending } = useFormStatus()


    return (<button type="submit"
        aria-disabled={pending}
        className={"bg-slate-400 text-slate-700 hover:text-slate-200 px-6 py-2 text-sm hover:bg-slate-950 hover:text-aztec-200 active:bg-slate-900 text-bold transition-all duration-75 ease-in-out " + (pending ?
            "cursor-not-allowed inline-flex items-center justify-center " : "cursor-pointer"
        )}>
        {
            pending && <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                viewBox="0 0 24 24"
            >
                <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    className="opacity-25"
                ></circle>
                <path
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    className="opacity-75"
                ></path>
            </svg>
        }
        {children}</button>)
}

export default SumbitButton;