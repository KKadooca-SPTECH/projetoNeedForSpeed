function register() {
    window.location.href = 'register.html'
}

/* ===== REDIRECT TO THE QUIZ ===== */
    function redirect_quiz() {

        if (sessionStorage.ID_USUARIO == null) {
          alert("Você deve fazer o login para realizar o quiz! Clique em Ok...");
        }

         else {
            setTimeout(() => {
                window.location = "quiz.html";
            }, "2000");

      }
    }

function login() {

        var emailVar = input_email.value;
        var senhaVar = input_password.value;

        if (emailVar == "" || senhaVar == "") {
            alert("Erro: preencha todos os campos corretamente!");
            return false;
        }
        else {
            setInterval(5000)
        }

        console.log("FORM LOGIN: ", emailVar);
        console.log("FORM SENHA: ", senhaVar);

        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {

            // if (instrucaoSql.includes("null")) {
            //     fetch("/usuarios/autenticarSemTentativas", {
            //     method: "POST",
            //     headers: {
            //     "Content-Type": "application/json"
            // },
            //     body: JSON.stringify({
            //     emailServer: emailVar,
            //     senhaServer: senhaVar
            //     })
            // }).then(function (respota)) {

            // }

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(JSON.stringify(json));
                    sessionStorage.ID_USUARIO = json.idUser;
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                });

                    alert("Login realizado com sucesso! Redirecionando para a dashboard...");

                    setTimeout(() => {
                        window.location = "dashboard.html";
                    }, "2000");

            } else {

                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    console.error(texto);
                });
            }

        }).catch(function (erro) {
            alert(erro);
        })

        return false;
    }