const reverseInt = (number) => {
    //Implementación
    if(typeof(number) !== 'number'){
        throw new Error('Tipo de dato no admitido.');
    } else{
        if(number < 0){
            return -1 * Number(number.toString().replace(/^-+/, '').split('').reverse().join('').replace(/^0+/, ''));
        }
        return Number(number.toString().split('').reverse().join('').replace(/^0+/, ''));
    }


}

module.exports = {
    reverseInt
}