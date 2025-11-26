var dashboardModel = require("../models/dashboardModel");


    function plotarGraficoLinha(req, res) {
        var tempoServer = req.sql.tempo;

        dashboardModel.plotarGraficoLinha(tempoServer)
        .then((json) => {
            res.json(json)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    }


    function plotarGraficoBarra(req, res) {

        var acertosServer = req.sql.acertos;       

        dashboardModel.plotarGraficoBarra(acertosServer)
        .then((json) => {
            res.json(json)
        })
        .catch((err) => {
            res.status(500).json(err)
        })

    }


    function plotarKPImelhorTempo(req, res) {
        var melhorTempoServer = req.sql.melhorTempo;       

        dashboardModel.plotarKPImelhorTempo(melhorTempoServer)
        .then((json) => {
            res.json(json)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    }


    function plotarKPIpiorTentativa(req, res) {
        var piorTentativaServer = req.sql.piorTentativa;       

        dashboardModel.plotarKPIpiorTentativa(piorTentativaServer)
        .then((json) => {
            res.json(json)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    }


    function plotarKPImediaAcertos(req, res) {
        var mediaAcertosServer = req.sql.mediaAcertos;

        dashboardModel.plotarKPImediaAcertos(mediaAcertosServer)
        .then((json) => {
            res.json(json)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    }


    function plotarKPImediaErros(req, res) {
        var mediaErrosServer = req.sql.mediaErros;

        dashboardModel.plotarKPImediaErros(mediaErrosServer)
        .then((json) => {
            res.json(json)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    }


module.exports = {
    plotarGraficoLinha,
    plotarGraficoBarra,
    plotarKPImelhorTempo,
    plotarKPIpiorTentativa,
    plotarKPImediaAcertos,
    plotarKPImediaErros
}