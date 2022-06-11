const database = require('../models')

class Services {
    constructor(nomeDoModelo){
         this.nomeDoModelo = nomeDoModelo
    }

    async pegaTodosOsRegistros(){
        return database[this.nomeDoModelo].findAll()
    }

    async pegaUmRegistro(id){

    }

    async criaRegistro(dados){

    }

    async atualizaRegistro(dadosAtt, id, transacao = {}){
        return database[this.nomeDoModelo]
            .update(dadosAtt, {where: {id: id}}, transacao)
    }
    async atualizaRegistros(dadosAtt, id, where, transacao = {}){
        return database[this.nomeDoModelo]
            .update(dadosAtt, {where: {...where}}, transacao)
    }

    async apagaRegistro(id){

    }

}

module.exports = Services