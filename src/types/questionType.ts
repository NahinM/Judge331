interface Question {
    id: string;
    title: string;
    question: string;
    type: string;
    difficulty: string;
    symbols: string[];
    testCases: [string,boolean][];
    solved: number;
}

export type { Question };