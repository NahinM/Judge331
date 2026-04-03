import type { ProblemSet } from "../../types/problemsetType";

const problemset: ProblemSet = {
    name: "DFA problem set 1",
    detail: null,
    questions:[
        {
            id: 1,
            title: "find the end 1",
            question: "identify if a string has 1 in its end or not",
            type: "dfa",
            difficulty: "easy",
            symbols: ["0","1"],
            testCases: [
                ["101", true],
                ["100", false]
            ]
        },
        {
            id: 2,
            title: "find the end 0",
            question: "identify if a string has 0 in its end or not",
            type: "dfa",
            symbols: ["0","1"],
            difficulty: "easy",
            testCases: [
                ["100", true],
                ["101", false]
            ]
        }
    ]
}

export const getProblemSet = () => {
    return problemset;
}