import type { Question } from "../types/questionType";

export const select = (question: Question | null) => {
    window.localStorage.setItem("selectedQuestion", JSON.stringify(question));
};

export const getSelected = (): Question | null => {
    const question = window.localStorage.getItem("selectedQuestion");
    if (question) {
        return JSON.parse(question);
    }
    return null;
};