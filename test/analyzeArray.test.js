import analyzeArray from '../code/analyzeArray.js'

test('finds average min max and length of array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});

test('finds average min max and length of array with array given', () => {
    const arr = [1,8,3,4,2,6];
    expect(analyzeArray(arr)).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});

test('returns undefined with empty array', () => {
    const arr = [];
    expect(analyzeArray(arr)).toBe(undefined);
});

test('finds average min max and length of array with one element', () => {
    const arr = [1];
    expect(analyzeArray(arr)).toEqual({ average: 1, min: 1, max: 1, length: 1 });
});

test('array has to be passed', () => {
    const arr = 23;
    expect(analyzeArray(arr)).toEqual(undefined);
});

test('works with negatives ', () => {
    expect(analyzeArray([-1, 4, -2, 6])).toEqual({ average: 1.75, min: -2, max: 6, length: 4 });
});