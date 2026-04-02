const exchangeRates = {
  USD: { EUR: 0.92, RUB: 92.5, GBP: 0.79, JPY: 151.2 },
  EUR: { USD: 1.09, RUB: 100.5, GBP: 0.86, JPY: 164.3 },
  RUB: { USD: 0.011, EUR: 0.010, GBP: 0.0085, JPY: 1.63 },
  GBP: { USD: 1.27, EUR: 1.16, RUB: 117.8, JPY: 191.5 },
  JPY: { USD: 0.0066, EUR: 0.0061, RUB: 0.61, GBP: 0.0052 }
};

function convertCurrency() {
  const amountInput = document.getElementById('amount');
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;
  const resultDiv = document.getElementById('result');
  const errorP = document.getElementById('errorMessage');

  const inputValue = amountInput.value.trim();
  const amount = parseFloat(inputValue);
  
  if (!inputValue) {
    errorP.textContent = 'Ошибка: Введите сумму.';
    errorP.style.display = 'block';
    resultDiv.style.display = 'none';
    return;
  }

  if (isNaN(amount) || amount <= 0) {
    errorP.textContent = 'Ошибка: Сумма должна быть положительным числом.';
    errorP.style.display = 'block';
    resultDiv.style.display = 'none';
    return;
  }

  errorP.style.display = 'none';

  let convertedAmount;
  if (fromCurrency === toCurrency) {
    convertedAmount = amount;
  } else {
    const rate = exchangeRates[fromCurrency]?.[toCurrency];
    if (!rate) {
      errorP.textContent = 'Ошибка: Курс не найден.';
      errorP.style.display = 'block';
      resultDiv.style.display = 'none';
      return;
    }
    convertedAmount = amount * rate;
  }

  resultDiv.innerHTML = `
    <strong>Результат:</strong><br>
    ${amount.toFixed(2)} ${fromCurrency} = 
    <span style="font-size: 1.2em; color: #2196F3;">${convertedAmount.toFixed(2)} ${toCurrency}</span>
  `;
  resultDiv.style.display = 'block';
}

document.getElementById('convertBtn').addEventListener('click', convertCurrency);