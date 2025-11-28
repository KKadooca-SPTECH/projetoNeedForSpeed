var chartLinha = null;
var chartBarra = null;

function obterDados() {

  fetch("/dashboard/plotarGraficoLinha", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idUser: sessionStorage.ID_USUARIO })
  })
    .then(r => r.json())
    .then(dadosLinha => {

      fetch("/dashboard/plotarGraficoBarra", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idUser: sessionStorage.ID_USUARIO })
      })
        .then(r => r.json())
        .then(dadosBarra => {
          plotarGraficoLinha(dadosLinha);
          plotarGraficoBarra(dadosBarra);
          carregarKPIs();
        });
    });
}

function plotarGraficoLinha(dados) {

  var valores = [];
  var tentativas = [];

  for (var i = 0; i < dados.length; i++) {
    valores.push(dados[i].tempo);
    tentativas.push("Tentativa " + (i + 1));
  }

  
  if (chartLinha != null) {
    chartLinha.destroy();
  }

  var ctx = document.getElementById("linha").getContext("2d");

  chartLinha = new Chart(ctx, {
    type: "line",
    data: {
      labels: tentativas,
      datasets: [{
        label: "Tempo em segundos",
        data: valores,
        backgroundColor: '#e9e14f',
        borderColor: '#e9e14f'
      }]
    }
  });
}

function plotarGraficoBarra(dados) {

  var valores = [];
  var tentativas = [];

  for (var i = 0; i < dados.length; i++) {
    valores.push(dados[i].acertos);
    tentativas.push("Tentativa " + (i + 1));
  }
  
  if (chartBarra != null) {
    chartBarra.destroy();
  }

  var ctx = document.getElementById("barra").getContext("2d");

  chartBarra = new Chart(ctx, {
    type: "bar",
    data: {
      labels: tentativas,
      datasets: [{
        label: "Acertos por tentativa",
        data: valores,
        backgroundColor: '#e9e14f'
      }]
    }
  });
}

function carregarKPIs() {

  fetch("/dashboard/KPImelhorTempo", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ idUser: sessionStorage.ID_USUARIO })
})
  .then(r => r.json())
  .then(d => {
    
    var total = d[0].melhorTempo;
    var min = Math.floor(total / 60);
    var seg = total % 60;

    if (min < 10) {
      min = "0" + min;
    }

    if (seg < 10) {
      seg = "0" + seg;
    }

    melhor_tempo.innerText = min + ":" + seg;
  });



  fetch("/dashboard/KPIpiorTentativa", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idUser: sessionStorage.ID_USUARIO })
  })
    .then(r => r.json())
    .then(d => { pior_tentativa.textContent = d[0].piorTentativa });

  fetch("/dashboard/KPImediaAcertos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idUser: sessionStorage.ID_USUARIO })
  })
    .then(r => r.json())
    .then(d => { acertos.textContent = Number(d[0].mediaAcertos).toFixed(1) });

  fetch("/dashboard/KPImediaErros", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idUser: sessionStorage.ID_USUARIO })
  })
    .then(r => r.json())
    .then(d => { erros.textContent = Number(d[0].mediaErros).toFixed(1) });
}

obterDados();