const { request, response } = require('express');
const {getAllTasks, deleteTask, writeTasks} = require('./services')
const express = require('express');
const app = express();

app.use(express.json());
// const http = require('http');

const tasks = require('./tasks.json');

app.get('/', (request, response)=>{
    response.send('<h1> Hola Mundo </h1>')
})

app.get('/api/tasks', async (request, response) => {
    const tasks = await getAllTasks();
    response.json(tasks); 
  
})

app.get('/api/tasks/:id', async (request, response) => {
    const id = Number(request.params.id)
    const allTasks = await getAllTasks();
    const task = allTasks.find(x => x.id === id);

    if (task) {
        response.json(task);
    } else{
        response.status(404).end();
    }
})


app.delete('/api/tasks/:id', (request, response) => {
    const id = Number(request.params.id);
    deleteTask(id);
    response.status(204).end();
})

app.post('/api/tasks', async (request, response) => {
    try {
        let allTasks = await getAllTasks();
        const task = request.body
    
    if (!task || !task.content) {
        return response.status(400).json({
            error: 'task content is missing'
        })
    }
    
        const date = Date.now();
        const ids = allTasks.map(x => x.id);
        const maxId = Math.max(...ids);
    
        const newTask = {
            id: maxId + 1,
            content: task.content,
            date: new Date(date).toDateString(),
            completed: false
        }
    
        allTasks = [...allTasks, newTask];
        writeTasks(allTasks);
        response.status(201).json(newTask);
        
    } catch (error) {
        console.log(error)
    }
})

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
} );
