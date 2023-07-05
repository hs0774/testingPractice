import caesarCipher from "../code/caesarCipher.js"

test("shifts letters", () => {
    expect(caesarCipher('hello',1)).toBe('ifmmp');
});

test("works on capitals", () => {
    expect(caesarCipher('Hello',1)).toBe('Ifmmp');
});

test('blank returns blank' ,() => {
    expect(caesarCipher('',1)).toBe('');
});

test('unshifted returns same ' ,() => {
    expect(caesarCipher('hello',0)).toBe('hello');
});

test('works on multiple words' ,() => {
    expect(caesarCipher('hello, world',1)).toBe('ifmmp, xpsme');
});