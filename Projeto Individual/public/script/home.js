/* ===== DISPLAY CAROUSEL ===== */
    var saga1 = document.querySelector('.saga-1');
    var saga2 = document.querySelector('.saga-2');
    var saga3 = document.querySelector('.saga-3');

    function forward1() {
      saga1.style.display = 'none';
      saga2.style.display = 'flex';
    }

    function forward2() {
      saga2.style.display = 'none';
      saga3.style.display = 'flex';
    }

    function forward3() {
      saga3.style.display = 'none';
      saga4.style.display = 'flex';
    }

    function return1() {
      saga1.style.display = 'none';
      saga0.style.display = 'flex';
    }

    function return2() {
      saga2.style.display = 'none';
      saga1.style.display = 'flex';
    }

    function return3() {
      saga3.style.display = 'none';
      saga2.style.display = 'flex';
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