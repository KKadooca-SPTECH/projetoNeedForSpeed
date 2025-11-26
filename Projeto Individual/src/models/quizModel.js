var database = require("../database/config")

function registrar(idUser, tentativas, acertos, erros, tempo) {
    console.log("entrou no insert sql");
    
    var instrucaoSql = `
       INSERT INTO tentativasQuiz VALUES (DEFAULT, ${idUser}, 1, ${tentativas}, ${acertos}, ${erros}, ${tempo});
    `
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar
};