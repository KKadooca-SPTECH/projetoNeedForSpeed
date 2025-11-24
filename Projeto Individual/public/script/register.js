function login() {
    window.location.href = 'login.html'
}

/* ===== REDIRECT TO THE QUIZ ===== */
    function redirect_quiz() {

      if (sessionStorage.ID_USUARIO == null) {

        setTimeout(() => {
          alert("Você deve estar logado antes de responder ao quiz! Redirecionando ao login...");

            window.location = "login.html";
        }, "2000");

      } else {

        setTimeout(() => {
            window.location = "quiz.html";
        }, "2000");

      }
    }

  function register() {
    
    var nomeVar = input_name.value;
    var emailVar = input_email.value;
    var senhaVar = input_password.value;
    var confirmacaoSenhaVar = input_confirmation.value;

    var nomeTrim = nomeVar.trim();
    var senhaMaiuscula = senhaVar.toUpperCase();
    var senhaMinuscula = senhaVar.toLowerCase();

    // Verificando se há algum campo em branco
    if (
      nomeVar == "" ||
      emailVar == "" ||
      senhaVar == "" ||
      confirmacaoSenhaVar == ""
    ) {

      alert("Erro: todos os campos devem ser preenchidos!");
      return false;

    } else if ( nomeTrim != nomeVar ) {
        alert("Erro: o nickname inserido é inválido!")
    } else if ( !emailVar.includes('@') ) {
        alert("Erro: o email deve conter '@'");
    } else if ( !emailVar.includes('.') ) {
        alert("Erro: insira um endereço de email válido!");
    } else if ( senhaVar != confirmacaoSenhaVar ) {
        alert("Erro: As senhas não confirmam!");
    } /* else if ( 
              (senhaVar == senhaMaiuscula) || 
              (senhaVar == senhaMinuscula) ||
              (!senhaVar.includes(0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9)) ||
              (!senhaVar.includes('!' || '@' || '#' || '$' || '%' || '&'))
            ) {
        alert(`
              Erro: A senha deve conter ao menos: \n
              -> Letras maiúsculas e minúsculas;
              -> Um caractere numerico;
              -> Um caractere especial: (!, @, #, $, %, &).
              `);
    } */ else {

    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nomeVar,
        emailServer: emailVar,
        senhaServer: senhaVar,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {

          alert("Cadastro realizado com sucesso! Redirecionando para tela de Login...");

          setTimeout(() => {
            window.location = "login.html";
          }, "2000");
          
        } else {
          alert("Houve um erro ao tentar realizar o cadastro!");
        }
      })

    return false;
   }
  }