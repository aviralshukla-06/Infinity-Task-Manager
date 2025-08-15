
import { DeleteIcon } from "../icons/DeleteIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { EditIcon } from "../icons/EditIcon";
// import { ShareIcon } from "../icons/ShareIcon";

interface cardComponents {
    id: number;
    title: string;
    description?: string;
    status: Boolean;
    date: Date;
    open?: any;
    onClose?: any;
    onEdit?: () => void; // <-- Add this

}



export function Card(props: cardComponents) {

    return <>

        <div className="bg-white rounded-md shadow-lg w-56 h-72 mx-4 mt-6 border border-black">
            <div className="flex justify-between h-[15%] shadow-md items-center align-middle ">

                <div className="flex align-middle items-center w-[70%] justify-evenly pr-2 ">
                    <p><DocumentIcon size="md" /></p>
                    <div className="font-serif font-bold text-sm leading-3">{props.title}</div>
                </div>
                <div className="flex w-[30%] justify-evenly ">
                    <div className="flex">
                        {/* <span className="mr-2"><ShareIcon size="sm" /></span> */}
                        <DeleteIcon size="sm" contentId={props.id} />
                    </div>

                </div>
            </div>


            <div className="flex justify-between h-[21%] pl-3  items-center font-serif leading-4 align-middle ">
                {props.description}
            </div>
            <div className="font-serif text-[14px] flex justify-around items-center ">
                <p>
                    <span>Created on: </span>
                    {new Date(props.date).toLocaleDateString()}
                </p>
                {/* <div className="flex  w-[20%] justify-end font-bold cursor-pointer "> */}
                {props.onEdit && (
                    <button
                        onClick={props.onEdit}
                        className="flex w-[20%] font-bold cursor-pointer justify-end text-sm items-center mb-3 underline mt-2"
                    >
                        <EditIcon size={"lg"} />
                    </button>
                )}

            </div>

        </div>


    </>
}