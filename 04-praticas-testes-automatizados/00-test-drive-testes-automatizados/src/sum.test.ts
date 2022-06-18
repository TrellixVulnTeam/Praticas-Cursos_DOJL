import soma from "./sum";

describe('Testando várias somas',() => {
    test('adds 1 + 2 to equal 3', () => {
    expect(soma(1, 2)).toBe(3);
    });
    test('adds 2 + 2 to equal 4', () => {
        expect(soma(2, 2)).toBe(4);
    });
    test('adds 3 + 2 to equal 4', () => {
        expect(soma(3, 2)).toBe(5);
    });
    test('soma de soma', () => {
        expect(soma(soma(3, 2), soma(3, 2))).toBe(10);
    });
});