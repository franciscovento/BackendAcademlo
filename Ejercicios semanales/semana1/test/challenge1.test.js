const { reverseString } = require("../challenge1");

describe("Ejercicio no. 1", () => {
    test("Debería de invertir el string hello world a dlrow olleh", () => {
        const str = "hello world";
    
        const result = reverseString(str);
    
        expect(result).toBe("dlrow olleh");
    });
    
    test("Debería de invertir el string Academlo a olmedacA", () => {
        const str = "Academlo";
    
        const result = reverseString(str);
    
        expect(result).toBe("olmedacA");
    });
    
    test("Debería manejar y arrojar un error al pasar un argumento que no es un string", () => {
        const notStr = 12345;
    
        try {
            reverseString(notStr);
        } catch (e) {
            expect(e.name).toBe("Error");
        }
    });
    
    test("Debería manejar y arrojar un error al pasar un string de longitud <= 1 ", () => {
        const str = "a";
    
        expect(() => reverseString(str)).toThrow();
    });
    
    test("Debería manejar y arrojar un error al pasar un string de longitud > 15", () => {
        const str = "Lorem ipsum dolor sit amet, consectetur";
    
        expect(() => reverseString(str)).toThrow();
    });
    
});