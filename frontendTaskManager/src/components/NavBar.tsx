

export const NavBar = () => {

    const date = new Date(); // current date
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

    console.log(dayName); // e.g. "Friday"

    return (
        <div className="flex h-12 bg-white w-[80%] justify-end shadow-2xl border">
            {/* <div className="font-bold text-2xl pl-12 flex items-center ">
                TASK MANAGER
            </div> */}
            <div className="ml-auto text-right pr-12 leading-5 ">
                <div>
                    <div className="font-semibold text-xl">
                        {dayName}
                    </div>
                    <div className="text-blue-700 font-medium">
                        {date.toLocaleDateString()}
                    </div>
                </div>
            </div>
        </div>
    )
}