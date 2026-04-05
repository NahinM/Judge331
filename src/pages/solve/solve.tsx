import { useState } from "react";
import { useSelected } from "../store/selected";
import InputTable from "./input-table";

export default function Solve() {
    const Q = useSelected((state:any) => state.selected);
    const [n, setN] = useState<string>("1");

    return (
        <div className="p-4">
        <div>
            <a >submit</a>
            <a >result</a>
        </div>

        <div className="flex flex-row gap-4 mt-4">
            <div className="w-3/4 h-screen overflow-y-auto space-y-4">
            <div>
            {Q ? (
                <div className="border border-gray-500 p-4 rounded-lg">
                    <h1 className="text-xl text-center border-b border-gray-400 mb-4 font-bold p-4">Question: {Q.id}</h1>
                    <h2 className="text-lg text-center font-bold">--{Q.title}--</h2>
                    <p className="text-lg">{Q.question}</p>
                </div>
            ):(
                <div className="border border-gray-500 p-4 rounded-lg">
                    <h1 className="text-xl text-center border-b border-gray-400 mb-4 font-bold p-4 text-red-500">No question selected</h1>
                    <p className="text-lg text-center text-sky-700">Please select a question from the problemset page.</p>
                </div>
            )}
        </div>
        <div className="border border-gray-500 p-4 rounded-lg">
            Enter the number of nodes: <input type="text" className="border border-gray-600 px-2" value={n} onChange={(e) => setN(e.target.value)} />
            {Q && <InputTable n={Number(n!==""?n:"0")}/>}

        </div>
            </div>
            <div className="w-1/4 h-screen overflow-y-auto">
                <div className="border border-gray-500 p-4 rounded-lg">
                    <h2 className="text-lg text-center font-bold mb-4 border-b border-gray-400">Submissions</h2>
                </div>
            </div>
        </div>
        
        </div>
    );
}