//Imports de los módulos
//fs y path
const fs = require("fs").promises;

const getUsers = async() => {
    //Leer el archivo
    try{
        const data = await fs.readFile("users.json", {encoding: "utf8"});
        return JSON.parse(data);
    } catch(error){
        return error;
    }
  
    //Regresar el arreglo de usuarios como objeto literal Javascript (sin notación JSON)
};



const addUser = async (userObj) => {
    try {
        const data = await fs.readFile("users.json", {encoding:"utf8"});
        const obj = JSON.parse(data);
        obj.push(userObj);
        fs.writeFile("users.json", JSON.stringify(obj))
       return userObj;
    } catch (error) {
        console.log(error)
    }
    //leer el archivo 

    //convertir el contenido en formato JSON en un objeto JS

    //agregar el usuario en el arreglo

    //sobreescribir el arreglo en el archivo

    //si el proceso se realizó correctamente tendrás que regresar el objeto de usuario
    //que acabas de agregar en el arreglo
};



const clearUsers = async () => {
    //Vaciar el arreglo y sobreescribir el archivo
    try {
        const obj = []
        const resp = await fs.writeFile("users.json", JSON.stringify(obj))
        return true;
    } catch (error) {
        console.log(error)
    }
    //Si el proceso se realizó correctamente tendrás que regresar true
}
clearUsers();

module.exports = {
    getUsers,
    addUser,
    clearUsers,
};


//[{"firstname":"Eduardo","lastname":"Alvarez","email":"edu19@gmail.com","password":"edu12345"}]