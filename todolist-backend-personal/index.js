const http = require('http');
const {deleteTask, updateTask, addTask, getTasks, getTaskById, createTaskObj } = require('./todolist-services');
const url = require("url");

const endPoints = {
    get:{

    }, 
    post: {

    },
    put: {

    },
    delete: {

    }
}

const PORT = 8000;
http.createServer( async (request, response)=>{
    if (request.method === "GET") {
        switch (request.url) {
            case '/':
                response.end(JSON.stringify({
                    message: "todolist server"
                }));
                break;
            case '/tasks':
                //Regresar la lista de tareas que se encuentra en el archivo todolist.json
                const tasks = await getTasks();
                response.writeHead(200, {'Content-Type':'aplication/json'})
                response.end(JSON.stringify(tasks))
                break;
            
            // case '/tasks/':

            //     break;
            
            default:

            const urlObj = url.parse(request.url, true).pathname.split('/'); 
            const id = urlObj[urlObj.length - 1];
            const resourse = urlObj[urlObj.length - 2];
            if(resourse === "tasks"){
                const task = await getTaskById(id);
                response.end(JSON.stringify(task))

            }
                break;
        }
    }else if (request.method === "POST") {
        switch (request.url) {
             case '/tasks':
              //Obtener los datos que me está enviando el cliente
              //Evento data se dispara cuando el cliente está enviando datos al servidor.
              let body = "";
            request.on("data", (data)=>{
                body += data.toString();
            });

            request.on("end", async () => {
                let taskObj = createTaskObj(body)
                await addTask(taskObj);
                response.writeHead(201, {'Content-Type':'aplication/json'});
                response.end(JSON.stringify({
                    message: "Se ha agregado la tarea con éxito"
                }))
            })

                break;
            default:
                break;
        }
    }
}).listen(PORT);