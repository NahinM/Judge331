import { useEffect, useState } from "react";
import { getQuestions } from "./api";
import type { Question } from "../../types/questionType";
import { useSelected } from "../store/selected";
import { useNavigate } from "react-router-dom";

const table_columns = "border border-gray-400 px-4 py-2 ";

export default function Problemset() {
    const [tab, setTab] = useState("all");
    const [questions, setquestions] = useState<Question[]>([]);
    const selectQuestion = useSelected((state: any) => state.setSelected);
    const navigate = useNavigate();

    useEffect(() => {
        getQuestions().then(questions => {
            setquestions(questions);
        });
    },[]);

    return (
        <div className="p-2">
        <div className="flex flex-row gap-1">
            <a className={"py-1 px-2 rounded-md border border-gray-400" + (tab === "all" ? " bg-green-700 text-white" : "bg-gray-300")} onClick={() => setTab("all")}>
                All Problems
            </a>
            <a className={"py-1 px-2 rounded-md border border-gray-400" + (tab === "groups" ? " bg-green-700 text-white" : "bg-gray-300")} onClick={() => setTab("groups")}>
                Groups
            </a>
        </div>
        {
            tab === "all" && (
                <table className="table-auto w-full mt-4 text-center text-lg">
                    <thead>
                        <tr>
                            <th className={table_columns}>ID</th>
                            <th className={table_columns}>Title</th>
                            <th className={table_columns}>Type</th>
                            <th className={table_columns}>Difficulty</th>
                            <th className={table_columns}>solved</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            questions.map((question) => (
                                <tr
                                key={question.id} className="hover:bg-sky-300/50"
                                onClick={()=> {
                                    selectQuestion(question);
                                    navigate("/solve");
                                }}
                                >
                                    <td className={table_columns}>{question.id}</td>
                                    <td className={table_columns}>{question.title}</td>
                                    <td className={table_columns}>{question.type}</td>
                                    <td className={table_columns}>{question.difficulty}</td>
                                    <td className={table_columns}>{question.solved}x</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            )
        }
        
        </div>
    )
}