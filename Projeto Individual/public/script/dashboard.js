username.innerHTML = sessionStorage.NOME_USUARIO;

function obterDados(){
  // Aqui seria a função que obteria os dados do banco de dados
  // No caso, aqui você colocaria o fetch que teria o endereço da sua rota que você criou na pasta /routes e chamaria a função plotarGraficoLinha nessa função. Exemplo:
 
  fetch('dashboard/plotarGraficoLinha')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    plotarGraficoLinha(data);
    plotarGraficoBarra(data);
  })
  .catch(function(err){
    console.log(err);
  })

  var dados = [{
    tentativas:'Tentativa 1',
    acertos: 0
  },
  {
    tentativas:'Tentativa 2',
    acertos: 2
  },
  {
    tentativas:'Tentativa 3',
    acertos: 4
  },
  {
    tentativas:'Tentativa 4',
    acertos: 6
  },
  {
    tentativas:'Tentativa 5',
    acertos: 8
  },
  {
    tentativas:'Tentativa 6',
    acertos: 10
  }]

  // Chamando a função para plotar o gráfico de linha com os dados
  plotarGraficoLinha(dados);
  // Chamando a função para plotar o gráfico de barra com os dados
  plotarGraficoBarra(dados)
}

// Função para plotar o gráfico de linha
function plotarGraficoLinha(dados){
  
  // Separando os rótulos (labels) e os dados dos acertos
  var acertos = [];
  var tentativas = [];

  // Preenchendo os arrays com os dados
  for(var i = 0; i < dados.length; i++){
    acertos.push(dados[i].acertos);
    tentativas.push(dados[i].tentativas);
  }

  // Capturando o elemento canvas pelo id 
  var ctx = document.getElementById('linha').getContext('2d');
  // Criando o gráfico de linha usando o Chart.js
  var myChart = new Chart(ctx, {
      type: 'line', // Tipo de gráfico: linha
      data: { // Dados para o gráfico
          labels: tentativas, // Rótulos no eixo X
          datasets: [{ 
              label: 'Tempo em minutos', // Nome do conjunto de dados
              data: acertos, // Dados dos acertos
              backgroundColor: [
                  '#e9e14f', // Cor de fundo das linhas
              ],
              borderColor: [
                  '#e9e14f', // Cor da borda das linhas
              ],
              borderWidth: 1 // Largura da borda das linhas
          }]
      },
  });
} 

// Função para plotar o gráfico de barra
function plotarGraficoBarra(dados){

  var acertos = [];
  var tentativas = [];

  // Preenchendo os arrays com os dados
  for(var i = 0; i < dados.length; i++){
    acertos.push(dados[i].acertos);
    tentativas.push(dados[i].tentativas);
  }

  // Capturando o elemento canvas pelo id 
  var ctx = document.getElementById('barra').getContext('2d');
  // Criando o gráfico de barra usando o Chart.js
  var myChart = new Chart(ctx, {
      type: 'bar', // Tipo de gráfico: barra
      data: { // Dados para o gráfico
          labels: tentativas, // Rótulos no eixo X
          datasets: [{
              label: 'Acertos', // Nome do conjunto de dados
              data: acertos, // Dados dos acertos
              backgroundColor: [
                  '#e9e14f', // Cor de fundo das barras
              ],
              borderColor: [
                  '#e9e14f', // Cor da borda das barras
              ],
              borderWidth: 1 // Largura da borda das barras
          }]
      },
  });
}