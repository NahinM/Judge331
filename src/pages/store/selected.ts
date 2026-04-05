import {create} from 'zustand';
import type { Question } from '../../types/questionType';

export const useSelected = create((set) => ({
    selected: {},
    setSelected: (question:Question) => {
        set({selected: question});
        console.log("selected question: ", question);
    },
}));