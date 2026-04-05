import type { Question } from "../../types/questionType";
import axios from "axios";

export async function getQuestions(): Promise<Question[]> {
    try {
        const response = await axios.get('http://localhost:3000/problemset');
        console.log(response.data);
        return response.data as Question[];
    } catch (error) {
        console.error('Error fetching questions:', error);
    }
    return [] as Question[];
}