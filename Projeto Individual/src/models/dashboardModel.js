var database = require("../database/config")


// PLOTAR GRÁFICOS DE TEMPO E ACERTOS
function plotarGraficoBarra(idUser) {
    console.log("entrou no insert sql");
    
    var instrucaoSql = `
       SELECT tempo FROM tentativasQuiz WHERE idUser = '${idUser}';
    `
    var instrucaoSql2 = `
        SELECT tentativas FROM (SELECT tentativas FROM tentativasQuiz ORDER BY
        tentativas DESC LIMIT 6) AS ultimos WHERE idUser = '${idUser}' ORDER BY 
        tentativas ASC;
    `

    return database.executar(instrucaoSql,instrucaoSql2);
}

function plotarGraficoLinha(idUser) {
    console.log("entrou no insert sql");
    
    var instrucaoSql = `
       SELECT acertos FROM tentativasQuiz WHERE idUser = '${idUser}';
    `
    return database.executar(instrucaoSql);
}


// PLOTAR KPIs DE TEMPO
function plotarKPImelhorTempo(idUser) {
    console.log("entrou no insert sql");
    
    var instrucaoSql = `
       SELECT MIN(tempo) AS melhorTempo FROM tentativasQuiz WHERE idUser = '${idUser}';
    `
    return database.executar(instrucaoSql);
}

function plotarKPIpiorTentativa(idUser) {
    console.log("entrou no insert sql");
    
    var instrucaoSql = `
       SELECT tentativas AS piorTentativa FROM tentativasQuiz WHERE idUser = '${idUser}' && tempo = (SELECT MAX(tempo) FROM tentativas);
    `
    return database.executar(instrucaoSql);
}


// PLOTAR KPIs DE ACERTOS E ERROS
function plotarKPImediaAcertos(idUser) {
    console.log("entrou no insert sql");
    
    var instrucaoSql = `
       SELECT AVG(acertos) AS mediaAcertos FROM tentativasQuiz WHERE idUser = '${idUser}';
    `
    return database.executar(instrucaoSql);
}

function plotarKPImediaErros(idUser) {
    console.log("entrou no insert sql");
    
    var instrucaoSql = `
       SELECT AVG(ERROS) AS mediaErros FROM tentativasQuiz WHERE idUser = '${idUser}';
    `
    return database.executar(instrucaoSql);
}

module.exports = {
    plotarGraficoLinha,
    plotarGraficoBarra,
    plotarKPImelhorTempo,
    plotarKPIpiorTentativa,
    plotarKPImediaAcertos,
    plotarKPImediaErros
};