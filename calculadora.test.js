const calculadora = require("./calculadora");

test('A soma de 1 + 1 deve ser 2', () => {
    expect(calculadora.somar(1, 2)).toBe(3);
});

test('A subtração de 3 - 1 deve ser 2', () => {
    expect(calculadora.subtrair(3, 1)).toBe(2);
});

test('A multiplicação de 2 x 1 deve ser 2', () => {
    expect(calculadora.multiplicar(2, 1)).toBe(2);
});

test('A divisão de 2 / 1 deve ser 2', () => {
    expect(calculadora.dividir(2, 1)).toBe(2);
});