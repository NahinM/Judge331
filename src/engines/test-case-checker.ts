import DFA from "../engines/dfa";

export default class TestCaseChecker {
    private dfa: DFA;
    private testCases: [string, boolean][];
    public falseCases: string[] = [];

    constructor(dfa: DFA, testCases: [string, boolean][]) {
        this.dfa = dfa;
        this.testCases = testCases;
    }

    public check() : boolean {
        let allPassed = true;
        for (const [input, expected] of this.testCases) {
            const result = this.dfa.run(input);
            if (result !== expected) {
                this.falseCases.push(input);
                return false;
            }
        }
        return allPassed;
    }
}