-- CREATE USER 'NFS'@'%' IDENTIFIED BY "!NeedForSpeed100";
-- GRANT SELECT ON NFS.* TO 'NFS'@'%';
-- GRANT INSERT ON NFS.* TO 'NFS'@'%';
-- FLUSH PRIVILEGES;

CREATE DATABASE NFS;
USE NFS;
INSERT INTO usuario VALUES (DEFAULT, 'SLA', 'SLA', 'SLA');
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

INSERT INTO quiz (titulo) VALUES
	('Quiz #1');

CREATE TABLE tentativasQuiz (
	idTentativa INT PRIMARY KEY AUTO_INCREMENT,
	idUser INT,
    idQuiz INT,
    tentativas INT,
    acertos INT,
    erros INT,
		FOREIGN KEY (idUser)
			REFERENCES usuario(idUser),
		FOREIGN KEY (idQuiz)
			REFERENCES quiz(idQuiz)
);

INSERT INTO tentativasQuiz VALUES (DEFAULT, 1, 1, 2, 3, 4);


CREATE TABLE questao (
	idQuestao INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255),
    pontuacao INT,
    idQuiz INT,
		FOREIGN KEY (idQuiz)
			REFERENCES quiz(idQuiz)
);

INSERT INTO questao (titulo,pontuacao,idQuiz) VALUES
	('Em que ano foi lançado o primeiro exemplar da saga Need For Speed?',1,1),
	('Qual foi o último Need For Speed lançado pela Electronic Arts?',1,1),
	('Como surgiu a saga Need For Speed?',1,1),
	('Qual o faturamento aproximado de toda a franquia, de acordo com a Games Learning Society?',1,1),
	('A qual jogo da franquia pertence a BMW M3 GTR (E46) modelo 2001 da imagem ao lado?',1,1),
	('Quantos jogos da saga Need For Speed foram publicados até hoje?',1,1),
	('Qual o jogo mais bem avaliado da franquia?',1,1),
	('Qual dos seguintes jogos se passa totalmente no período noturno?',1,1),
	('Em qual jogo da franquia surgiu, nos consoles, o modo de perseguição, onde você poderia ser optar por ser o policial ou o criminoso?',1,1),
	('A qual jogo da franquia pertence o banner ao lado?',1,1);

CREATE TABLE alternativas (
	idAlternativa INT AUTO_INCREMENT,
    idQuestao INT,
    idQuiz INT,
		PRIMARY KEY (idAlternativa,idQuestao,idQuiz),
        FOREIGN KEY (idQuestao)
			REFERENCES questao(idQuestao),
		FOREIGN KEY (idQuiz)
			REFERENCES quiz(idQuiz),
    titulo VARCHAR(150),
    status_alternativa TINYINT,
			CHECK(status_alternativa IN(0,1)) -- Incorreta: 0 // Correta: 1
);

INSERT INTO alternativas (idQuestao,idQuiz,titulo,status_alternativa) VALUES
	('1','1','1995','0'),
	('1','1','1994','1'),
	('1','1','1990','0'),
	('1','1','2005','0'),

	('2','1','The Need For Speed','0'),
	('2','1','Need For Speed: Shift','0'),
	('2','1','Need For Speed: Underground 2','0'),
	('2','1','Need For Speed: Unbound','1'),

	('3','1','A partir do investimento de uma revista de carros','1'),
	('3','1','Com o lançamento do Toyota Supra MK4','0'),
	('3','1','A partir da ideia de um desenvolvedor da Electronic Arts','0'),
	('3','1','Após Trip Halkins - fundador da Electronic Arts - visitar o Japão','0'),

	('4','1','$ 2.4 bilhões','0'),
	('4','1','$ 1.1 bilhão','0'),
	('4','1','$ 2.3 bilhões','0'),
	('4','1','$ 1.9 bilhão','1'),

	('5','1','Need For Speed: Most Wanted (2005)','1'),
	('5','1','Need For Speed: Underground 2','0'),
	('5','1','Need For Speed: Most Wanted (2012)','0'),
	('5','1','Need For Speed™ (2015)','0'),

	('6','1','30','0'),
	('6','1','18','0'),
	('6','1','27','1'),
	('6','1','24','0'),

	('7','1','Need For Speed™ (2015)','0'),
	('7','1','Need For Speed: Most Wanted (2005)','1'),
	('7','1','Need For Speed: Underground 2','0'),
	('7','1','Need For Speed: Heat','0'),
	
	('8','1','Need For Speed: Unbound','0'),
	('8','1','Need For Speed™ (2015)','1'),
	('8','1','Need For Speed: V-Rally','0'),
	('8','1','Need For Speed: V-Rally 2','0'),
	
	('9','1','Need For Speed: High Stakes','0'),
	('9','1','Need For Speed: Carbon','0'),
	('9','1','Need For Speed 2 (1997)','0'),
	('9','1','Need For Speed III: Hot Pursuit','1'),
	
	('10','1','Need For Speed III: Hot Pursuit','0'),
	('10','1','Need For Speed: Unbound','1'),
	('10','1','Need For Speed: Nitro','0'),
	('10','1','Nenhuma das anteriores','0');

/*

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

*/