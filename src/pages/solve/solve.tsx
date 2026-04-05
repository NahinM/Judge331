import { useSelected } from "../store/selected";

export default function Solve() {
    const Q = useSelected((state:any) => state.selected);


    return (
        <div>
            {Q && (
                <div className="border border-gray-500 p-4 m-4 rounded-lg">
                    <h1 className="text-xl text-center border-b border-gray-400 mb-4 font-bold p-4">Question: {Q.id}</h1>
                    <h2 className="text-lg text-center font-bold">--{Q.title}--</h2>
                    <p className="text-lg">{Q.question}</p>
                </div>
            )}
        </div>
    );
}