import { getProblemSet } from "./api"
import { select } from "../../localdb/selected";
import { useNavigate } from "react-router-dom";
import { Info } from "lucide-react";

const cell = "p-2 text-center"

function ProblemSet( {problemSet}: {problemSet: ReturnType<typeof getProblemSet>} ) {
    const navigate = useNavigate();

    return (
        <div className="border border-gray-500 rounded-lg mb-4 mt-4">
        <h1 className="flex flex-row flex-nowarp items-center p-2 text-xl font-bold translate-y-[-50%] translate-x-[20px] bg-gray-100 inline-block rounded-lg border-1 border-gray-400" >{problemSet.name} <Info className="inline-block text-sky-500 cursor-pointer"/></h1>
        <table className="w-full mt-4">
            <thead className="border-b border-black">
                <tr>
                    <th className={cell}>ID</th>
                    <th className={cell}>Title</th>
                    <th className={cell}>Difficulty</th>
                </tr>
            </thead>
            <tbody className="text-black">
                {problemSet.questions.map((question) => (
                    <tr
                    key={question.id}
                    className="bg-transparent hover:bg-gray-300 cursor-pointer"
                    onClick={() => { select({...question}); navigate("/solve"); }}
                    >
                        <td className={cell}>{question.id}</td>
                        <td className={cell}>{question.title}</td>
                        <td className={cell} >
                            <span
                            className= {
                                "px-2 py-1 rounded-lg font-bold "
                                + {"easy": "bg-green-200", "medium": "bg-yellow-200", "hard": "bg-red-200"}[question.difficulty]
                            }
                            >{question.difficulty}</span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
};

export default function AllProblems() {
    const problemSet = getProblemSet();
    return (
        <div className="container mx-auto p-4">
            <ProblemSet problemSet={problemSet}/>
        </div>
    )
}