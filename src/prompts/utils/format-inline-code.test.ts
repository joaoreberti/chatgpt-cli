import { formatInlineCode } from "./format-inline-code";

describe('formatInlineCode', () => {
    it('should replace all code blocks with banana', () => { 
        const text = 'This is a test `const a = 1;`, `const b = 2;`, `const a = 1;`';
        const matchesArray = [ '`const a = 1;`' , '`const b = 2;`'];
        const result = formatInlineCode(text, matchesArray);
        expect(result).toBe('This is a test banana, banana, banana');
    })
    // it('should replace all code blocks with green', () => {
    // not sure what chalk.color() returns, so I can't test this
    //})'
})