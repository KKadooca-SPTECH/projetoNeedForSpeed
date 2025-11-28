var database = require("../database/config")


function plotarGraficoLinha(idUser) {
    console.log("entrou no insert sql");
    
    var instrucaoSql = `
       SELECT tempo FROM tentativasQuiz WHERE 
       idUser = '${idUser}' ORDER BY idTentativa ASC LIMIT 6;
    `
    return database.executar(instrucaoSql);
}



function plotarGraficoBarra(idUser) { // Funciona pelo amor de Deus...
    console.log("entrou no insert sql");
    
    var instrucaoSql = `
       SELECT acertos FROM tentativasQuiz WHERE idUser = '${idUser}';
    `;

    return database.executar(instrucaoSql);
}


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
       SELECT tentativas AS piorTentativa FROM tentativasQuiz 
       WHERE idUser = '${idUser}' ORDER BY erros ASC LIMIT 1;
    `;
    return database.executar(instrucaoSql);
}



function plotarKPImediaAcertos(idUser) {
    console.log("entrou no insert sql");
    
    var instrucaoSql = `
       SELECT AVG(acertos) AS mediaAcertos FROM 
       tentativasQuiz WHERE idUser = '${idUser}';
    `
    return database.executar(instrucaoSql);
}

function plotarKPImediaErros(idUser) {
    console.log("entrou no insert sql");
    
    var instrucaoSql = `
       SELECT AVG(erros) AS mediaErros FROM tentativasQuiz WHERE idUser = '${idUser}';
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
