interface Question {
    id: number;
    title: string;
    question: string;
    type: string;
    difficulty: string;
    symbols: string[];
    testCases: [string,boolean][];
}

export type { Question };