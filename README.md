# Todo-API
 Projeto de criação de um To Do List em conjunto com outros devs.


## How to test
Install [Postman](https://www.getpostman.com/)

API endpoints summary
Route          | Method | Description
---------------|--------|--------------------
/tasks         | GET    | Read tasks
/tasks         | POST   | Create tasks
/getById/:id   | GET    | Read one task
/updateOne/:id | POST   | Update one task
/deleteOne/:id | GET    | Delete one task
/check/:id     | GET    | Update check to true or false


### GET http://localhost:3000/api/v1/tasks

##### HTTP Request Body Example
N/A

##### HTTP Response Body Example

    {
     "_id": "6252585dab79fae147baf49d",
     "name": "Name atualizada",
     "description": "Tarefa Atualizada",
     "check": false,
     "date": "2022-04-10T04:08:59.419Z",
     "v": 0
    },
    {
     "_id": "62525b945ed3e6b86d09f5a5",
     "name": "um nome",
     "description": "Uma description",
     "check": false,
     "date": "2022-04-10T04:22:38.655Z",
     "v": 0
    }

### POST http://localhost:3000/api/v1/tasks

##### HTTP Request Body Example
    
    {
     "name": "dwdwdwdwdw",
     "description": "Uma description"
    }
    

##### HTTP Response Body Example

    {
     "name": "dwdwdwdwdw",
     "description": "Uma description",
     "check": false,
     "date": "2022-04-10T19:09:09.889Z",
     "_id": "62532b61df217ed18170d166",
     "__v": 0
    }
    
    
### GET http://localhost:3000/api/v1/getById/62532b61df217ed18170d166 

##### HTTP Request Body Example
N/A
    
##### HTTP Response Body Example

    {
     "name": "dwdwdwdwdw",
     "description": "Uma description",
     "check": false,
     "date": "2022-04-10T19:09:09.889Z",
     "_id": "62532b61df217ed18170d166",
     "__v": 0
    }
    
    
### POST http://localhost:3000/api/v1/updateOne/62532b61df217ed18170d166 

##### HTTP Request Body Example
    
    {
     "name": "Update",
     "description": "Uma description"
    }
    

##### HTTP Response Body Example

    {
     "name": "Update",
     "description": "Uma description",
     "check": false,
     "date": "2022-04-10T19:09:09.889Z",
     "_id": "62532b61df217ed18170d166",
     "__v": 0
    }
    
### GET http://localhost:3000/api/check/2532b61df217ed18170d166 

##### HTTP Request Body Example
N/A
    

##### HTTP Response Body Example

    {
      Task Deleted
    }
    
### GET http://localhost:3000/api/v1/ deleteOne/6252585dab79fae147baf49d

##### HTTP Request Body Example
N/A
    

##### HTTP Response Body Example

    {
     "_id": "6252585dab79fae147baf49d",
     "name": "Name atualizada",
     "description": "Tarefa Atualizada",
     "check": true,
     "date": "2022-04-10T04:08:59.419Z",
     "__v": 0
    }
