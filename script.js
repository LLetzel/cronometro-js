let cronometro; // Declaração de uma variável global para armazenar o identificador do intervalo do cronômetro

let minutos = 0; // Inicialização da variável para os minutos
let segundos = 0; // Inicialização da variável para os segundos
let milissegundos = 0; // Inicialização da variável para os milissegundos

function começar() {
  // Função para iniciar o cronômetro
  cronometro = setInterval(function() {
    // Utiliza a função setInterval para executar o código a cada intervalo de tempo (10 milissegundos neste caso)
    milissegundos += 10; // Incrementa os milissegundos
    if (milissegundos == 1000) {
      // Se os milissegundos atingirem 1000, incrementa os segundos e reseta os milissegundos
      milissegundos = 0;
      segundos++;
      if (segundos == 60) {
        // Se os segundos atingirem 60, incrementa os minutos e reseta os segundos
        segundos = 0;
        minutos++;
      }
    }
    // Atualiza os elementos HTML com os valores dos minutos, segundos e milissegundos
    document.getElementById("minutos").innerText = minutos < 10 ? "0" + minutos : minutos;
    document.getElementById("segundos").innerText = segundos < 10 ? "0" + segundos : segundos;
    document.getElementById("milissegundos").innerText = milissegundos < 100 ? (milissegundos < 10 ? "00" + milissegundos : "0" + milissegundos) : milissegundos;
  }, 10); // O código dentro da função será executado a cada 10 milissegundos
}

function pausar() {
  // Função para parar o cronômetro
  clearInterval(cronometro); // Utiliza a função clearInterval para parar a execução do código repetido pelo setInterval
}

function zerar() {
  // Função para zerar o cronômetro
  clearInterval(cronometro); // Para a execução do código repetido pelo setInterval
  minutos = 0; // Reseta os minutos
  segundos = 0; // Reseta os segundos
  milissegundos = 0; // Reseta os milissegundos
  // Atualiza os elementos HTML para exibir "00" em todos os campos
  document.getElementById("minutos").innerText = "00";
  document.getElementById("segundos").innerText = "00";
  document.getElementById("milissegundos").innerText = "000";
}
