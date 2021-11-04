const reverseString = (str) => {
    //Implementación
    if(typeof(str) == "string"  && str.length < 15 && str.length > 1){
        return str.split("").reverse().join("");
    }else{
        throw new Error("Argumento no válido");
    }
}

module.exports = {
    reverseString
}