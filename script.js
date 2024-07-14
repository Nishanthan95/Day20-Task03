document.getElementById('fetch-prices').addEventListener('click', fetchCryptoPrices);

function fetchCryptoPrices() {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
        .then(response => response.json())
        .then(data => displayCryptoPrices(data))
        .catch(error => console.error('Error fetching cryptocurrency prices:', error));
}

function displayCryptoPrices(cryptos) {
    const cryptoContainer = document.getElementById('crypto-prices');
    cryptoContainer.innerHTML = cryptos.map(crypto => `
        <div class="col-md-4 crypto-item">
            <div class="card">
                <div class="card-body d-flex align-items-center">
                    <img src="${crypto.image}" alt="${crypto.name}">
                    <div>
                        <h5 class="card-title mb-0">${crypto.name} (${crypto.symbol.toUpperCase()})</h5>
                        <p class="card-text mb-0">Price: $${crypto.current_price.toFixed(2)}</p>
                        <p class="card-text">Market Cap: $${crypto.market_cap.toLocaleString()}</p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}
