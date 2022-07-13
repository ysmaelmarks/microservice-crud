import express from "express";
import db from "./config-db/dbConection.js";
import routes from "./usuarios-routes/main.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

db.on("error", (err) => {
    console.log("Erro ao conectar no banco de dados: " + err);
}
);

db.once("open", () => {
    console.log("Banco de dados conectado com sucesso!");
}
);


const app = express();
app.use(express.json());
routes(app);


const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'CRUD API',
    version: '1.0.0',
    description: 'API CRUD TEST',
  },
  servers:[
    {
      url: 'http://localhost:3000',
      description: 'TEST SERVER',
    },
],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['src/usuarios-routes/swagger.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;