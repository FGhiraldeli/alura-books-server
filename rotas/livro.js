const { Router } = require("express")

const router = Router()

router.get('/', (req, res) => {
    try {
        res.send("Olá Mundo!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

})

router.post('/', (req, res) => {
    res.send('Voce fez uma requisicao do tipo POST')
})

router.patch('/', (req, res) => {
    res.send('Voce fez uma requisicao do tipo PATCH')
})

router.delete('/', (req, res) => {
    res.send('Voce fez uma requisicao do tipo DELETE')
})

module.exports = router