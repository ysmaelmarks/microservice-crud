import mongoose from "mongoose";

const usuariosSchema = new mongoose.Schema(
    {
        id: {type: String},    
        nome: {type: String, required:true},
        email: {type: String},
        login: {type: String},
        senha: {type: String}
    },
    {
        versionKey: false,
    }
);

const usuarios = mongoose.model('usuarios', usuariosSchema);

export default usuarios;