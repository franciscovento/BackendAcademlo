function landMass() {
    //Implementación
    const masaTerrestre = 148940000;
    const percent = (arguments[1]*100 / masaTerrestre).toFixed(2);
    let resp = {
        "percent": Number(percent),
        "message": `${arguments[0]} representa el ${percent} de la masa de la tierra`
    };

   


    return resp;
}

module.exports = landMass;