import capitalize from '../code/capitalize.js';

test('Returns capitalized letter', () => {
  expect(capitalize('word')).toBe('Word');
});

test('return empty string as empty', ()  => {
    expect(capitalize('')).toBe('');
});
