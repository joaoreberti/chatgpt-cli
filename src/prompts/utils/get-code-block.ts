export function getCodeBlock(text: string): Set<string> | null { 
    const regex = /```[\s\S]*?```/g;
    const match = text.match(regex);
    if (match) {
        return new Set(match)
    }
    return null;
}
    