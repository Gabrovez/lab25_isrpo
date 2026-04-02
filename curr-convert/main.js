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

  const amount = parseFloat(amountInput.value);
  
  let convertedAmount;
  if (fromCurrency === toCurrency) {
    convertedAmount = amount;
  } else {
    const rate = exchangeRates[fromCurrency][toCurrency];
    convertedAmount = amount * rate;
  }

  resultDiv.innerHTML = `
    <strong>Результат:</strong><br>
    ${amount} ${fromCurrency} = 
    <span style="font-size: 1.2em; color: #2196F3;">${convertedAmount} ${toCurrency}</span>
  `;
  resultDiv.style.display = 'block';
}

document.getElementById('convertBtn').addEventListener('click', convertCurrency);