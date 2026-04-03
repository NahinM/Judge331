export default class DFA {
    private graph: { [key: string]: number }[];
    private acceptedStates: number[];

    constructor(graph: { [key: string]: number }[], acceptedStates: number[]) {
        this.graph = graph;
        this.acceptedStates = acceptedStates;
    }

    public run(L: string): boolean {
        let state = 0;
        for(const ch of L) {
            state = this.graph[state][ch];
        }
        return this.acceptedStates.includes(state);
    }
}