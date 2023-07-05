import calc from '../code/calculator.js'

test('Adds', () => {
    expect(calc.add(1,2)).toBe(3);
});

test('subs', () => {
    expect(calc.sub(2,1)).toBe(1);
});

test('smaller - bigger is negative', () => {
    expect(calc.sub(1,2)).toBe(-1);
});

test('mults', () => {
    expect(calc.mult(1,2)).toBe(2);
});

test('divs', () => {
    expect(calc.div(2,1)).toBe(2);
});

test('tests 0/0 should be Nan', () => {
    expect(calc.div(0,0)).toBe(NaN);
});

test('strings should be able to be added as nums', () => {
    expect(calc.add('2','3')).toBe(5);
});

test('strings should be able to be added to nums', () => {
    expect(calc.add(2,'3')).toBe(5);
});
