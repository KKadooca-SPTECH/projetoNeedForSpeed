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