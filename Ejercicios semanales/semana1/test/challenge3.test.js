const {capitalizeLetters} = require("../challenge3");

describe("Ejercicio no.3", () => {
    test('Debería de convertir el string i love javascript a I Love Javascript', () => {
        expect(capitalizeLetters('i love javascript')).toBe('I Love Javascript');
    });
    
    test('Debería de convertir el string hello world a Hello World', () => {
        expect(capitalizeLetters('hello world')).toBe('Hello World');
    });
    
    test('Debería de convertir el string welcome to academlo a Welcome To Academlo', () => {
        expect(capitalizeLetters('welcome to academlo')).toBe('Welcome To Academlo');
    });
});
