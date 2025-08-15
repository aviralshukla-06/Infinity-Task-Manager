import type { ReactElement } from "react";

interface buttonInterface {
    icon: ReactElement,
    text: string
}

export const Button = ({ icon, text }: buttonInterface) => {
    return (
        <div className="bg-inherit h-12  text-white w-[80%] flex justify-start pl-6 items-center rounded-md cursor-pointer hover:bg-white hover:text-black">
            <div >
                {icon}
            </div>
            <div className="font-serif text-xl pl-2">
                {text}
            </div>
        </div>
    )
}