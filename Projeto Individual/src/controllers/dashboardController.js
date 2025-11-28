var dashboardModel = require("../models/dashboardModel");

function plotarGraficoLinha(req, res) {
    var idUser = req.body.idUser;

    dashboardModel.plotarGraficoLinha(idUser)
        .then(json => res.json(json))
        .catch(err => res.status(500).json(err));
}

function plotarGraficoBarra(req, res) {
    var idUser = req.body.idUser;

    dashboardModel.plotarGraficoBarra(idUser)
        .then(json => res.json(json))
        .catch(err => res.status(500).json(err));
}

function plotarKPImelhorTempo(req, res) {
    var idUser = req.body.idUser;

    dashboardModel.plotarKPImelhorTempo(idUser)
        .then(json => res.json(json))
        .catch(err => res.status(500).json(err));
}

function plotarKPIpiorTentativa(req, res) {
    var idUser = req.body.idUser;

    dashboardModel.plotarKPIpiorTentativa(idUser)
        .then(json => res.json(json))
        .catch(err => res.status(500).json(err));
}

function plotarKPImediaAcertos(req, res) {
    var idUser = req.body.idUser;

    dashboardModel.plotarKPImediaAcertos(idUser)
        .then(json => res.json(json))
        .catch(err => res.status(500).json(err));
}

function plotarKPImediaErros(req, res) {
    var idUser = req.body.idUser;

    dashboardModel.plotarKPImediaErros(idUser)
        .then(json => res.json(json))
        .catch(err => res.status(500).json(err));
}

module.exports = {
    plotarGraficoLinha,
    plotarGraficoBarra,
    plotarKPImelhorTempo,
    plotarKPIpiorTentativa,
    plotarKPImediaAcertos,
    plotarKPImediaErros
}
