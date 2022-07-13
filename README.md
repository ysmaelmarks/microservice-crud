# CRUD API

CRUD API server that connects to a database (mongoDB) and has operations for:

- Create
- Read
- Update
- Delete

### Installation

Clone this repo and install the dependencies

```sh
$ git clone https://github.com/ysmaelmarks/microservice-crud.git
$ cd proj-microservice/
$ npm i
$ docker compose up
```

### HTTP Requests

- Get /usuarios
- Post /usuarios
- Put /usuarios/:id
- Delete /usuarios/:id

#### JSON Model

{
- "id": "example"
- "nome": "example" (required)
- "email": "example"
- "login": "example"
- "senha": "example"
}


#### DEV Note
That's my first time working with Docker. I wanted to build a API to learn more about Docker and Microservices concepts. 


---

