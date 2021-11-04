const capitalizeLetters = (str) => {
    //Implementación
    let array = str.split(' ');
    let array2= [];
    for (let i = 0; i < array.length; i++) {
       let element = array[i];
        array2.push(element.charAt(0).toUpperCase() + element.slice(1));
    }

 
   return array2.join(' ');
}
capitalizeLetters("Javascript es lo maximo");

module.exports = {
    capitalizeLetters
}