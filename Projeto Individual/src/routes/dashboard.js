var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/plotarGraficoLinha", function (req, res) {
    dashboardController.plotarGraficoLinha(req, res);
});

router.post("/plotarGraficoBarra", function (req, res) {
    dashboardController.plotarGraficoBarra(req, res);
});

router.post("/KPImelhorTempo", function (req, res) {
    dashboardController.plotarKPImelhorTempo(req, res);
});

router.post("/KPIpiorTentativa", function (req, res) {
    dashboardController.plotarKPIpiorTentativa(req, res);
});

router.post("/KPImediaAcertos", function (req, res) {
    dashboardController.plotarKPImediaAcertos(req, res);
});

router.post("/KPImediaErros", function (req, res) {
    dashboardController.plotarKPImediaErros(req, res);
});

module.exports = router;
