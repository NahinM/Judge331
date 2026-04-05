import type { Question } from "../../types/questionType";
import { useSelected } from "../store/selected";
import { useEffect, useState } from "react";

const getGraph = (n: number, symbols: string[]): { [key: string]: number }[] => {
    const graph = [];
    for (let i = 0; i < n; i++) {
        const node: { [key: string]: number } = {};
        symbols.forEach(sym => {
            node[sym] = -1;
        });
        graph.push(node);
    }
    return graph;
}

export default function InputTable({ n }: { n: number }) {
    const Q:Question = useSelected((state:any) => state.selected);
    console.log(n);
    const [graph, setGraph] = useState<{[key: string]: number}[]>(getGraph(n, Q ? Q.symbols : []));

    const clearGraph = () => {
        setGraph(getGraph(n, Q ? Q.symbols : []));
    }

    useEffect(() => {
        setGraph(getGraph(n, Q ? Q.symbols : []));
    }, [n, Q]);

    if (!Q || n===0) {
        return null;
    }
    return (
        <div>
            <br />
            <p>Table for '{n}' nodes</p>
            <table className="table-auto mt-4 text-center rounded-md p-1 overflow-hidden">
                <thead>
                    <tr className="bg-green-600">
                        <th className="border border-gray-600 p-1">Node</th>
                        {
                            Q && Q.symbols.map((sym, idx) => (
                                <th key={idx} className="border border-gray-600 p-1">{sym}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: n }, (_, i) => (
                        <tr key={i}>
                            <td className="border border-gray-600">q{i}</td>
                            {
                                graph[i] && Q.symbols.map((sym, idx) => (
                                    <td key={idx} className="border border-gray-600">
                                        <input type="text" className="w-full" value={graph[i][sym]===-1 ? "" : graph[i][sym]} onChange={(e) => {
                                            const newGraph = [...graph];
                                            newGraph[i][sym] = e.target.value==="" ? -1 : Number(e.target.value);
                                            setGraph(newGraph);
                                        }} />
                                    </td>
                                ))
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <button className="px-3 py-1 bg-green-600 rounded-md m-1 text-white">Run</button>
            <button
            className="px-3 py-1 bg-red-600/70 rounded-md m-1 text-white"
            onClick={clearGraph}>
                Clear
            </button>
        </div>
    );
}