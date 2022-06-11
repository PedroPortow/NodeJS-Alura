const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()
router
    .get('/niveis', NivelController.pegaTodosOsNiveis)
    .get('/niveis/:id', NivelController.pegaUmNivel)
    .delete('/niveis/:id', NivelController.apagaNivel)
    .post('/niveis/:id/restaura', NivelController.restauraNivel)

module.exports = router