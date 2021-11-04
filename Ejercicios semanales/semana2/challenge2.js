function divisibleByLeft(n) {
    //Implementación
    let resp = [false];
    let arrayN = n.toString().split('').map(x => Number(x));
    for (let i = 1; i < arrayN.length; i++) {
        const element = arrayN[i];
        if (element % arrayN[i -1] == 0 ) {
            resp.push(true);
        }else{
            resp.push(false);
        }
    }



    return resp;
}

divisibleByLeft(73312);

module.exports = divisibleByLeft;