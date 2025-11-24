CREATE USER 'NFS'@'%' IDENTIFIED BY "!NeedForSpeed100";
GRANT SELECT ON NFS.* TO 'NFS'@'%';
GRANT INSERT ON NFS.* TO 'NFS'@'%';
FLUSH PRIVILEGES;

CREATE DATABASE NFS;
USE NFS;

CREATE TABLE usuario (
	idUser INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(15) NOT NULL UNIQUE,
    email VARCHAR(40) NOT NULL UNIQUE,
    senha VARCHAR(40) NOT NULL
);

CREATE TABLE chamado (
	idChamado INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(50),
    descricao VARCHAR(255),
    statusChamado TINYINT,
		CONSTRAINT chk_statusChamado
			CHECK (statusChamado IN(0,1)), -- Não respondido: 0 // Respondido: 1
	dataInicio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    dataFim DATETIME,
    fkUsuario INT,
		FOREIGN KEY (fkUsuario)
			REFERENCES usuario(idUser)
);

CREATE TABLE quiz (
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(45)
);

CREATE TABLE tentativasQuiz (
	idUser INT,
    idQuiz INT,
    tentativas INT,
    acertos INT,
    erros INT,
    PRIMARY KEY (idUser, idQuiz),
		FOREIGN KEY (idUser)
			REFERENCES usuario(idUser),
		FOREIGN KEY (idQuiz)
			REFERENCES quiz(idQuiz)
);

CREATE TABLE questao (
	idQuestao INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(45),
    pontuacao INT,
    idQuiz INT,
		FOREIGN KEY (idQuiz)
			REFERENCES quiz(idQuiz)
);

CREATE TABLE alternativas (
	idAlternativa INT AUTO_INCREMENT,
    idQuestao INT,
    idQuiz INT,
		PRIMARY KEY (idAlternativa,idQuestao,idQuiz),
        FOREIGN KEY (idQuestao)
			REFERENCES questao(idQuestao),
		FOREIGN KEY (idQuiz)
			REFERENCES quiz(idQuiz),
    titulo VARCHAR(45),
    status_alternativas TINYINT,
		CONSTRAINT chk_statusAlternativas
			CHECK(status_alternativas IN(0,1)) -- Incorreta: 0 // Correta: 1
);

CREATE TABLE jogoMemoria (
	idJogoMemoria INT PRIMARY KEY AUTO_INCREMENT,
    dificuldade TINYINT,
		CONSTRAINT chk_dificuldade
			CHECK (dificuldade BETWEEN 0 AND 10) -- O tabuleiro muda de dificuldade, de acordo com sua geração pseudoaleatória
);

CREATE TABLE tentativaJogoMemoria (
	idUser INT,
    idJogoMemoria INT,
		PRIMARY KEY (idUser,idJogoMemoria),
	tentativas INT,
    vitorias INT,
    desistencias INT
);

CREATE TABLE imagem (
	idImagem INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    url VARCHAR(99),
    statusImagem TINYINT,
		CONSTRAINT chk_statusImagem
			CHECK (statusImagem IN(0,1)), -- Incorreta: 0 // Correta: 1
	fkImagemIgual INT,
		FOREIGN KEY (fkImagemIgual)
			REFERENCES imagem(idImagem),
	fkJogoMemoria INT,
		FOREIGN KEY (fkJogoMemoria)
			REFERENCES jogoMemoria(idJogoMemoria)
);