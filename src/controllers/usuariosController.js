import usuarios from "../usuarios-models/usuarios.js";

class usuariosController{
    
    static listarUsuarios = (req, res) => {
        usuarios.find((err, usuarios) => {
            if(err){
                res.status(500).send(err);
            }
            res.status(200).json(usuarios);
        })
    }

    static criarUsuario = (req, res) => {
        let novoUsuario = new usuarios(req.body);
        novoUsuario.save((err, usuario) => {
            if(err){
                res.status(500).send(err);
            }
            res.status(201).json(usuario.nome);
            return;
        })
    }

    static atualizarUsuario = (req, res) => {
        usuarios.findByIdAndUpdate(req.params.id, req.body, (err, usuario) => {
            if(err){
                res.status(500).send(err);
            }
            res.status(200).send({message: `${usuario.nome} atualizado com sucesso!`});
            return;
        })
    }

    static deletarUsuario = (req, res) => {
        usuarios.findByIdAndRemove(req.params.id, (err, usuario) => {
            if(err){
                res.status(500).send(err);
            }
            res.status(200).send({message: 'Usuário deletado com sucesso!'});
            return;
        })
    }
}

export default usuariosController;