import { getInlineCode } from "./get-inline-code";

describe('getInlineCode', () => { 
    it('should return null if no inline code is found', () => {
        const text = 'This is a test';
        const result = getInlineCode(text);
        expect(result).toBeNull();
    })
    it('should return the inline code if one is found', () => { 
        const text = 'This is a test `const a = 1;`';
        const result = getInlineCode(text);
        expect(result).toStrictEqual(new Set([ '`const a = 1;`' ]));
    })
    it('should return more than 1 inline code', () => { 
        const text = 'This is a test `const a = 1;`, `const b = 2;`';
        const result = getInlineCode(text);
        expect(result).toStrictEqual(new Set([ '`const a = 1;`' , '`const b = 2;`']));
    })
    it('should return Set with only one entry if the same inline twice', () => { 
        const text = 'This is a test `const a = 1;`, `const a = 1;`';
        const result = getInlineCode(text);
        expect(result).toStrictEqual(new Set([ '`const a = 1;`']));
    })
    //still haven't found a regex to achieve this
    // it('should not catch isCode', () => {
    //     const text = 'This is a test ```const a = 1;```';
    //     const result = getInlineCode(text);
    //     expect(result).toBeNull();
    // })

});