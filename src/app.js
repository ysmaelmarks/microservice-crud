import express from "express";
import db from "./config-db/dbConection.js";
import routes from "./usuarios-routes/main.js";

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

export default app;