import type { Question } from "./questionType";

interface ProblemSet {
    name: string;
    questions: Question[];
    detail: any;
}

export type { ProblemSet };