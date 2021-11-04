const {reverseInt} = require("../challenge2");

describe("Ejercicio no.2", () => {
    test("Debería de invertir los dígitos del entero 123 a 321", () => {
        const number = 123;
        expect(reverseInt(number)).toBe(321);
    });
    
    test("Debería de invertir los dígitos del entero 13689 a 98631", () => {
        const number = 13689;
        expect(reverseInt(number)).toBe(98631);
    });
    
    test("Debería de invertir los dígitos del entero 13940 a 4931", () => {
        const number = 13940;
        expect(reverseInt(number)).toBe(4931);
    });
    
    test("Debería de invertir los dígitos del entero -13940 a -4931", () => {
        const number = -13940;
        expect(reverseInt(number)).toBe(-4931);
    });
    
    test("Debería de invertir los dígitos del entero -13940 a -4931", () => {
        const number = -13940;
        expect(reverseInt(number)).toBe(-4931);
    });
    
    test("Debería de arrojar un error al pasar un tipo de dato diferente a number como argumento", () => {
        const number = "Acade1230";
        expect(() =>  reverseInt(number)).toThrow();
    });
});