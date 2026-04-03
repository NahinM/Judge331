import { getSelected } from "../../localdb/selected"
import type { Question } from "../../types/questionType";
import { useRef, useState } from "react";
import { toGraph } from "./to-graph";
import DFA from "../../engines/dfa";
import TestCaseChecker from "../../engines/test-case-checker";

function TextInput({graph}:{graph: React.RefObject<{ [key: string]: number }[]>}) {
    const [text, setText] = useState<string>("");
    const [n, setN] = useState<string>("1");
    return (
        <>
        <p>Enter the mumber of nodes: <input className="border border-black rounded-md px-1" type="text" value={n} onChange={(e) => setN(e.target.value)} /></p>
        <p>The directed graph format is [from, to, symbol]</p>
        <br />
        <textarea
            name="graph"
            id="graph"
            value={text}
            onChange={(e) => {setText(e.target.value); graph.current = toGraph(Number(n), e.target.value);}}
            cols={40}
            rows={10}
            className="border border-gray-600 p-2 rounded-lg"
        ></textarea>
        <br />
        </>
    )
}

function TabularInput({symbols, graph}:{symbols: string[], graph: React.RefObject<{ [key: string]: number }[]>}) {
    const [n, setN] = useState<string>("1");
    const getInitialTable = () => {
        const table: { [key: string]: number }[] = [];
        for (let i = 0; i < Number(n); i++) {
            const obj: { [key: string]: number } = {};
            for (const symbol of symbols) {
                obj[symbol] = -1;
            }
            table.push(obj);
        }
        return table;
    }
    const [table, setTable] = useState<{[key: string]: number}[]>(getInitialTable());
    const setTablesize = (size: number) => {
        const newTable = [...table];
        while (newTable.length < size) {
            const obj: { [key: string]: number } = {};
                for (const symbol of symbols) {
                    obj[symbol] = -1;
                }
            newTable.push(obj);
        }
        setTable(newTable);
    };
    return (
        <>
        <p>Enter the mumber of nodes: <input className="border border-black rounded-md px-1" type="text" value={n} onChange={(e) => {setN(e.target.value); setTablesize(Number(e.target.value));}} /></p>
        <br />
        <table className="border-collapse border border-gray-400 p-2 text-center">
            <thead>
                <tr className="p-2 border border-gray-400">
                    <th>From</th>
                    {
                    symbols.map((symbol, index) => (
                        <th key={index}>{symbol}</th>
                    ))
                    }
                </tr>
            </thead>
            <tbody>
                {table.map((row, index) => (
                    <tr key={index} className="p-2 border border-gray-400">
                        <td>{index}</td>
                        {
                        symbols.map((symbol, sIndex) => (
                            <td key={sIndex}>
                                <input
                                type="number"
                                value={(row[symbol] !== -1) ? row[symbol] : ""}
                                onChange={(e) => {
                                    const newTable = [...table];
                                    if (!newTable[index]) newTable[index] = {};
                                    newTable[index][symbol] = (e.target.value==="" ? -1 : Number(e.target.value));
                                    setTable(newTable);
                                    graph.current = newTable;
                                }}
                                className="border border-gray-400 rounded-md px-1"
                                />
                            </td>
                        ))
                        }
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default function Solve() {
    const question:Question | null = getSelected();
    const graph = useRef<{ [key: string]: number }[]>([]);
    const [inputType, setInputType] = useState<string>("table");
    const [acceptedStates, setAcceptedStates] = useState<number[]>([]);
    const [accepted, setAccepted] = useState<boolean | null>(null);
    const checker = useRef<TestCaseChecker | null>(null);
    const dfa = useRef<DFA | null>(null);

    if (!question) {
        return (
            <div className="p-4 border border-gray-500 rounded-lg my-2">
                <h1 className="text-2xl font-bold mb-4">No question selected</h1>
                <p className="text-lg">Please select a question from the problem set.</p>
            </div>
        )
    }

    return (
        <>
        <div className="p-4 my-2">
            <div className="mb-4 border border-gray-600 p-4 rounded-lg">
                <h1 className="text-2xl font-bold mb-2">{"Question "}
                    {accepted && <span className="px-2 py-1 bg-green-500 text-sm rounded-lg">Accepted</span>}
                    {accepted === false && <span className="px-3 py-1 bg-yellow-500 text-xl rounded-lg">Wrong Answer</span>}
                </h1>
                <div className="flex flex-row items-center space-x-2">
                    <span
                className={`px-2 py-1 rounded-lg font-bold ${{"easy": "bg-green-500", "medium": "bg-yellow-500", "hard": "bg-red-500"}[question.difficulty]}`}
                >
                    type:{question.difficulty}
                </span>
                
                </div>
                <br />
                <br />
                <p>Symbols: {question.symbols.join(", ")}</p>
                <p>{question.question}</p>
            </div>
            <br />
            <div className="mb-4 border border-gray-600 p-4 rounded-lg">
                <h1 className="text-2xl font-bold items-center">Input
                    <span className="ml-4 text-sm font-normal border border-gray-400 rounded-md p-1">
                        <select
                        name="inputType"
                        id="inputType"
                        value={inputType}
                        onChange={(e) => setInputType(e.target.value)}>
                        <option className="p-1" value="text">1. Text Input</option>
                        <option className="p-1" value="table">2. Tabular Input</option>
                        </select>
                    </span>
                </h1>
                <br />
                {inputType === "text" ? <TextInput graph={graph} /> : <TabularInput symbols={question.symbols} graph={graph} />}
                <br />
                <p>Accepted States:
                    <input
                    className="border border-gray-400 rounded-md px-2 ml-2"
                    type="text"
                    value={(acceptedStates.length > 0 ? acceptedStates.join(",") : "")}
                    onChange={(e) => setAcceptedStates((e.target.value !== "" ? e.target.value.split(",").map(Number) : []))} />
                </p>
            <br />
            <button
            className={`py-1 px-3 ${accepted ? "bg-green-500" : "bg-yellow-500"} rounded-lg font-bold`}
            onClick={() => {
                if (acceptedStates.length === 0) {
                    alert("Please enter at least one accepted state.");
                    return;
                }
                dfa.current = new DFA(graph.current, acceptedStates);
                checker.current = new TestCaseChecker(dfa.current, question.testCases);
                setAccepted(checker.current.check());
            }}>Run</button>
            </div>
            { accepted === false && (
                <div className="mb-4 border border-gray-600 p-2 rounded-lg">
                    <h1 className="text-2xl font-bold">Failed Test Cases</h1>
                    <ul>
                        {checker.current?.falseCases.map((input:string, index:number) => (
                            <li key={index} className="text-red-500">
                                {input}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
        </>
    )
}