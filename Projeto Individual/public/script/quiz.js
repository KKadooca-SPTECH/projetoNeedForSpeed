/* ===== DISPLAY QUIZ ===== */

var startscreen = document.querySelector('.back-form');
var content = document.querySelector('.content');

var retornar = document.getElementById('btn_retorna');
var avancar = document.getElementById('btn_avanca');

var selecionou_var = false;

var lista_respostas = [];

var i = 0;

var questao1 = `Em que ano foi lançado o primeiro exemplar da saga Need For Speed?`;
var option_a1 = `1995`;
var option_a2 = `1994`; /* CORRETA */
var option_a3 = `1990`;
var option_a4 = `2005`;

var questao2 = `Qual foi o último Need For Speed lançado pela Electronic Arts?`;
var option_b1 = `The Need For Speed`;
var option_b2 = `Need For Speed: Shift`;
var option_b3 = `Need For Speed: Underground 2`;
var option_b4 = `Need for Speed: Unbound`; /* CORRETA */

var questao3 = `Como surgiu a saga Need For Speed?`;
var option_c1 = `A partir do investimento de uma revista de carros`; /* CORRETA */
var option_c2 = `Com o lançamento do Toyota Supra MK4`;
var option_c3 = `A partir da ideia de um desenvolvedor da Electronic Arts`;
var option_c4 = `Após Trip Halkins - fundador da Electronic Arts - visitar o Japão`;

var questao4 = `Qual o faturamento aproximado de toda a franquia, de acordo com a Games Learning Society?`;
var option_d1 = `$ 2.4 bilhões`;
var option_d2 = `$ 1.1 bilhão`;
var option_d3 = `$ 2.3 bilhões`;
var option_d4 = `$ 1.9 bilhão`; /* CORRETA */

var questao5 = `A qual jogo da franquia pertence a BMW M3 GTR (E46) modelo 2001 da imagem ao lado?`;
var option_e1 = `Need For Speed: Most Wanted (2005)`; /* CORRETA */
var option_e2 = `Need For Speed: Underground 2`;
var option_e3 = `Need For Speed: Most Wanted (2012)`;
var option_e4 = `Need For Speed™ (2015)`;

var questao6 = `Quantos jogos da saga Need For Speed foram publicados até hoje?`;
var option_f1 = `30`;
var option_f2 = `18`;
var option_f3 = `27`; /* CORRETA */
var option_f4 = `24`;

var questao7 = `Qual o jogo mais bem avaliado da franquia?`;
var option_g1 = `Need For Speed™ (2015)`;
var option_g2 = `Need For Speed: Most Wanted (2005)`; /* CORRETA */
var option_g3 = `Need For Speed: Underground 2`;
var option_g4 = `Need For Speed: Heat`;

var questao8 = `Qual dos seguintes jogos se passa totalmente no período noturno?`;
var option_h1 = `Need For Speed: Unbound`;
var option_h2 = `Need For Speed™ (2015)`; /* CORRETA */
var option_h3 = `Need For Speed: V-Rally`;
var option_h4 = `Need For Speed: V-Rally 2`;

var questao9 = `Em qual jogo da franquia surgiu, nos consoles, o modo de perseguição, 
                onde você poderia ser optar por ser o policial ou o criminoso?`;
var option_i1 = `Need For Speed: High Stakes`;
var option_i2 = `Need For Speed: Carbon`;
var option_i3 = `Need For Speed 2 (1997)`;
var option_i4 = `Need For Speed III: Hot Pursuit`; /* CORRETA */

var questao10 = `A qual jogo da franquia pertence o banner ao lado?`;
var option_j1 = `Need For Speed III: Hot Pursuit`;
var option_j2 = `Need For Speed: Unbound`; /* CORRETA */
var option_j3 = `Need For Speed: Nitro`;
var option_j4 = `Nenhuma das anteriores`;

function entrar() {
    startscreen.style.display = 'none';
    content.style.display = 'flex';

    var i = 0;

    verifica();
}

function alternativa_a() {
    selecionou_a = true;
    selecionou_b = false;
    selecionou_c = false;
    selecionou_d = false;

    selecionou_var = true;
}
function alternativa_b() {
    selecionou_b = true;
    selecionou_a = false;
    selecionou_c = false;
    selecionou_d = false;

    selecionou_var = true;
}
function alternativa_c() {
    selecionou_c = true;
    selecionou_b = false;
    selecionou_a = false;
    selecionou_d = false;

    selecionou_var = true;
}
function alternativa_d() {
    selecionou_d = true;
    selecionou_b = false;
    selecionou_c = false;
    selecionou_a = false;

    selecionou_var = true;
}

function avanca() {

    if (selecionou_var == true) {
        if (i < 9) {
            if (selecionou_a == true) {
                lista_respostas.push("a");
            }
            else if (selecionou_b == true) {
                lista_respostas.push("b");
            }
            else if (selecionou_c == true) {
                lista_respostas.push("c");
            }
            else {
                lista_respostas.push("d");
            }

            i++;
            verifica();

            selecionou_var = false;
            selecionou_a = false;
            selecionou_b = false;
            selecionou_c = false;
            selecionou_a = false;
        }
        else {
            // Finalizar questionário
        }
    }
    else {
        alert("Selecione uma opção para prosseguir!");
    }
}

function retorna() {
    if (i >= 0) i--;
    verifica();

    lista_respostas.length = lista_respostas.length - 1;
}

function verifica() {

    div_img.innerHTML = `<img src="assets/material-icons/interrogation-sem-fundo.png" alt="img-quiz"></img>`;     

        if (i == 0) {
            div_mensagem.innerHTML = `Questão ${i+1}: ${questao1}`;
            lbl_1.innerHTML = option_a1;
            lbl_2.innerHTML = option_a2;
            lbl_3.innerHTML = option_a3;
            lbl_4.innerHTML = option_a4;
        }
        else if (i == 1) {
            div_mensagem.innerHTML = `Questão ${i+1}: ${questao2}`;
            lbl_1.innerHTML = option_b1;
            lbl_2.innerHTML = option_b2;
            lbl_3.innerHTML = option_b3;
            lbl_4.innerHTML = option_b4;
        }
        else if (i == 2) {
            div_mensagem.innerHTML = `Questão ${i+1}: ${questao3}`;
            lbl_1.innerHTML = option_c1;
            lbl_2.innerHTML = option_c2;
            lbl_3.innerHTML = option_c3;
            lbl_4.innerHTML = option_c4;
        }
        else if (i == 3) {
            div_mensagem.innerHTML = `Questão ${i+1}: ${questao4}`;
            lbl_1.innerHTML = option_d1;
            lbl_2.innerHTML = option_d2;
            lbl_3.innerHTML = option_d3;
            lbl_4.innerHTML = option_d4;
        }
        else if (i == 4) {
            div_mensagem.innerHTML = `Questão ${i+1}: ${questao5}`;
            lbl_1.innerHTML = option_e1;
            lbl_2.innerHTML = option_e2;
            lbl_3.innerHTML = option_e3;
            lbl_4.innerHTML = option_e4;

            div_img.innerHTML = `<img src="assets/carros/bmw_m3_most-wanted.jpg" alt="img-quiz"></img>`;
        }
        else if (i == 5) {
            div_mensagem.innerHTML = `Questão ${i+1}: ${questao6}`;
            lbl_1.innerHTML = option_f1;
            lbl_2.innerHTML = option_f2;
            lbl_3.innerHTML = option_f3;
            lbl_4.innerHTML = option_f4;
        }
        else if (i == 6) {
            div_mensagem.innerHTML = `Questão ${i+1}: ${questao7}`;
            lbl_1.innerHTML = option_g1;
            lbl_2.innerHTML = option_g2;
            lbl_3.innerHTML = option_g3;
            lbl_4.innerHTML = option_g4;
        }
        else if (i == 7) {
            div_mensagem.innerHTML = `Questão ${i+1}: ${questao8}`;
            lbl_1.innerHTML = option_h1;
            lbl_2.innerHTML = option_h2;
            lbl_3.innerHTML = option_h3;
            lbl_4.innerHTML = option_h4;
        }
        else if (i == 8) {
            div_mensagem.innerHTML = `Questão ${i+1}: ${questao9}`;
            lbl_1.innerHTML = option_i1;
            lbl_2.innerHTML = option_i2;
            lbl_3.innerHTML = option_i3;
            lbl_4.innerHTML = option_i4;
        }
        else if (i == 9) {
            div_mensagem.innerHTML = `Questão ${i+1}: ${questao10}`;
            lbl_1.innerHTML = option_j1;
            lbl_2.innerHTML = option_j2;
            lbl_3.innerHTML = option_j3;
            lbl_4.innerHTML = option_j4;

            div_img.innerHTML = `<img src="assets/banners/background_gif.gif" alt="img-quiz"></img>`;
        }
}