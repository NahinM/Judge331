import type { Question } from "./questionType";

interface ProblemSet {
    name: string;
    detail: any;
    questions: Question[];
}

export type { ProblemSet };