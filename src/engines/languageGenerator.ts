export default class TestGenerator {
    private symbols: string[];
    private maxLen: number;
    private isAccepted: boolean = false;
    private engine: any;

    constructor(symbols: string[], maxLen: number) {
        this.symbols = symbols;
        this.maxLen = maxLen;
    }

    public generate(L: string){
        console.log(L);
        if(L.length >= this.maxLen) return;
        for(let i=0; i<=this.symbols.length; i++) {
            this.generate(L + this.symbols[i]);
        }
    }
}