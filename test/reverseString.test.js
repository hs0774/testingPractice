import reverseString from '../code/reverseString.js'

test('returns reversed word', () =>{
    expect(reverseString('hello')).toBe('olleh');
});

test('returns reversed string of words', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('returns empty string', () => {
    expect(reverseString('')).toBe('');
});

test('reverses already reversed words', () => {
    expect(reverseString(`): evitcudorp eb ot gniog m'I yadoT`)).toBe(`Today I'm going to be productive :)`);
});  