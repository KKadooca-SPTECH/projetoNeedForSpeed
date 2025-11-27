var quizModel = require("../models/quizModel");

function registrar(req, res) {
    // var lista_respostas = req.script.lista_respostas
    var user_id = req.body.user_id
    var acertos = req.body.acertos
    var erros = req.body.erros
    var tempo = req.body.tempo
    var tentativas = req.body.tentativas


    if (!user_id || !tentativas || !acertos || !erros || !tempo) {
        res.status(400).json('erro de dado vazio');
    }

    quizModel.registrar(user_id, tentativas, acertos, erros, tempo)
        .then((json) => {
            res.json(json)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

module.exports = {
    registrar
}