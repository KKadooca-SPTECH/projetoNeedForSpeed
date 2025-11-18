function register() {
    window.location.href = 'register.html'
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
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(JSON.stringify(json));
                    sessionStorage.EMAIL_USUARIO = json[0].email;
                    sessionStorage.NOME_USUARIO = json[0].nome;
                });

            } else {

                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    console.error(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;
    }