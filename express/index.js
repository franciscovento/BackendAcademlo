const { request, response } = require('express');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs/promises');

//Crear una instancia de express
const app = express();

const PORT = 8000;


//Middelwares -> una función que hace de intermediario entre la petición y respuesta hacia el cliente
// | request | response | 

//Middelware incorporado (built-in)
app.use(express.urlencoded({extended: true})) //Atiende cualquier tipo de petición -> GET, POST, PUT, DELETE
app.use(express.json()); // 
app.use(express.static("public"));


//Middleware de terceros
app.use(morgan("dev"));




// express.urlencoded({extended:true}) -> decodifica los datos que son enviados a través de x-www-irlencoded y los coloca en request.body

// app.get('/', (request, response)=> {
//     console.log(request);
//     response.send('Hola mundo!');
// }) // Atiende peticiones a través del método get

app.get('/tasks', async (request, response)=> {
   try{
    const tasks = await fs.readFile("tasks.json", "utf8")
    response.json(JSON.parse(tasks))
   } catch(error){
       console.log(error)
   }
});


app.get('/', (request, response)=> {
    response.sendFile(path.resolve('index.html'))
})

// app.post('/tasks', (request, response)=> {
// console.log(request.body)
// })


app.put('/tasks/:id/:userId', (request, response)=>{
    console.log(request.params);

})

app.delete('tasks/:id', (request, response) => {
    console.log(request.params)
})

//Configuramos app apra escuchar sobre un puerto
app.listen(PORT, ()=> {
    console.log(`Servidor escuchando sobre el puerto ${PORT}`)
});