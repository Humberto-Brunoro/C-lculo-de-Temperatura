function convertTemperature() {
    var fahrenheitInput = document.getElementById('fahrenheitInput');
    var resultElement = document.getElementById('result');

    var fahrenheit = parseFloat(fahrenheitInput.value);
    if (isNaN(fahrenheit)) {
      resultElement.textContent = 'Insira uma temperatura válida.';
      return;
    }

    var celsius = (fahrenheit - 32) * 5/9;
    resultElement.textContent = 'A temperatura em Celsius é ' + celsius.toFixed(2) + '°C.';

    var body = document.body;
    if (celsius <= 30) {
      body.style.background = 'linear-gradient(to bottom right, #ADD8E6, #87CEEB)';
    } else {
      body.style.background = 'linear-gradient(to bottom right, #FFA500, #FFD700)';
    }
  }