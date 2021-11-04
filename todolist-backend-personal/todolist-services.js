const fs = require('fs/promises');
const { parse } = require('path');
const path = require('path');

const TODOLIST_PATH = path.resolve('todolist.json');

const getTasks = async () => {
    //Obtener todas las tareas
    try {
        const tasks = await fs.readFile(TODOLIST_PATH, "utf8");
        return JSON.parse(tasks);
    } catch (error) {
        console.log(error)
        
    }
}

const getTaskById = async(id) => {
   try{
    
    const tasks = await getTasks();
    return tasks.find(x => x.id === parseInt(id));
    }catch(error){
    console.log(error)
}

console.log(id)
   }

const addTask = async(taskObj) => {
    //Agregar tareas
    try {
        const tasks = await getTasks();
        //Generar id de forma dinámica
        const nextId = tasks.length + 1;

        taskObj ={
            id: nextId,
            ...taskObj
        }
        
        taskObj['id'] = nextId; // creamos y agregamos el id
        tasks.push(taskObj);
        await fs.writeFile(TODOLIST_PATH, JSON.stringify(tasks));
        return tasks;
    } catch (error) {
        console.log(error)
    }
}

const updateTask = (id, taskObj) => {
    //Actualizar una tarea
}

const deleteTask = (id) => {
    //Borrar una tarea
}


const createTaskObj = (uriEncode) => {
    let bodyArr = decodeURIComponent(uriEncode).split("&");
    let dataObj = {}
    bodyArr.map((e) => {
      const keyValue =  e.split('=')
        dataObj[keyValue[0]] = keyValue[1];
    });

    return dataObj;
}


//CRUD

module.exports = {
    getTasks,
    getTaskById,
    addTask,
    updateTask,
    deleteTask,
    createTaskObj
}