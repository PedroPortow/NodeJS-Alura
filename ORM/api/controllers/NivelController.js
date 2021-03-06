const database = require('../models')

const Services = require('../services/Services')
const niveisServices = new Services('Niveis')

class NivelController {
    static async pegaTodosOsNiveis(req, res){
        try{
            const todosOsNiveis = await niveisServices.pegaTodosOsRegistros()
            return res.status(200).json(todosOsNiveis)

        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    static async pegaUmNivel(req, res){
        const {id} = req.params
        try{
            const umNivel = await database.Niveis.findOne({ where:{ id:Number(id) } })

            return res.status(200).json(umNivel)
        }catch(err){
            return res.status(500).json(error.message)
        }
    }
    static async apagaNivel(req, res){
        const {id} = req.params
        try{
            await database.Niveis.destroy({ where:{ id:Number(id) } })
            return res.status(200).json({ mensagem: `id ${id} foi deletado`})
        } catch(err){
            return res.status(500).json(error.message)
        }
    }

    static async restauraNivel(req, res){
        const {id} = req.params;
        try{
            await database.Niveis.restore( {where: {id: Number(id)}})
            return res.status(200).json({mensagem: `id ${id} foi restaurado`})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = NivelController
