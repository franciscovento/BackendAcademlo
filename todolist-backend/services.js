const fs = require('fs/promises');
const path = require('path');

const TASK_PATH = path.resolve('tasks.json');

const getAllTasks = async () => {
try {
    
    const tasks = await fs.readFile(TASK_PATH, 'utf8');
    
    return JSON.parse(tasks);

} catch (error) {
    console.log(error)
}
}

const writeTasks = async (todoList) => {
    try {
        await fs.writeFile(TASK_PATH, JSON.stringify(todoList));
    } catch (error) {
        console.log(error)
        
    }
}



const deleteTask = async (id) => {
    const tasks = await getAllTasks();
    if (tasks.find(x => x.id == id)) {
        const newTasks = tasks.filter(x => x.id !== id)
        writeTasks(newTasks);
    }
}

module.exports = {
    getAllTasks,
    writeTasks,
    deleteTask
  };
  
