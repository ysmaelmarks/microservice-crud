import express from "express";
import usuarios from "./usuarios-router.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
      res.status(200).send({titulo: "API de Usuários", versão: "1.0.0"});
    })
  
    app.use(express.json(),
    usuarios
    )
  }
  
export default routes