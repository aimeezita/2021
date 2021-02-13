// Nesta aula foi criada uma aplicação back-end de requisição e resposta através do Node.js utilizando o express


// importação do express 
const express = require('express');

//importar função uuid = unique Id
const {uuid} = require('uuidv4');

const app = express();


//Define que as informações serão enviadas como JSON
app.use(express.json());


/*
 * Métodos HTTP
 * GET: Buscar informações no Back-end
 * POST: Criar uma informação no Back-end
 * PUT / PATCH: Alterar uma informação no Back-end
 * DELETE: Deleta a informação no Bak-End
 

 
TIPOS DE PARÂMETROS

QUERY PARAMS: Filtros e paginação
São parâmetros que utilizam o método get

ROUTE PARAMS: Identifica os recursos na hora de atualizar ou deletar (:/id)
REQUEST BODY: Conteúdo na hora de criar ou editar um recurso. Essas informações chegam no formato JSON

*/

//Simula um banco de dados
const projects = [];



//requisição e resposta da aplicação

app.get('/projects', (request, response) => {
    // return response.send('Hello World');
    // const { title, owner} = request.query;

    // console.log(title);
    // console.log(owner);
    
    return response.json(projects);
});

//cria um novo elemento no array
app.post('/projects', (request, response) => {
      const {title, Owner} = request.body;

      const project = {id: uuid(), title, Owner};


      //pega a informação de project e joga dentro do array projects criado no início
      projects.push(project)


    
    return response.json(project);
}); 

//atualiza UM projeto que precisa ser identificado através da /:id
app.put('/projects/:id', (request, response) => {
      
  const projectIndex = projects.findIndex(project => project.id == id);

  if(projectIndex < 0){
     return response.status(400).json({Error: 'Project not found.'}) 
  }
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
    'Projeto 2',
    'Projeto 3']);
});


// adiciona porta 3333 para localhost
//escreve uma mensagem quando liga o servidor
app.listen(3333, () => {
    console.log("🚀 Back-end started!  ")
});

