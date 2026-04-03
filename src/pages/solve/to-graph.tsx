export const toGraph = (n:number,text: string): any => {
    const graph = new Array(n);
    for (let i = 0; i < n; i++) graph[i] = {};
    try {
        const lines = text.split("\n");
        for (const line of lines) {
            const [from, symbol, to] = line.split(" ").map(s => s.trim());
            graph[Number(from)][symbol] = Number(to);
        }
        return graph;
    }catch (e) {
        console.error("Invalid input format");
        return null;
    }
}