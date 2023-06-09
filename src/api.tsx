const BASE_URL = `https://api.coinpaprika.com/v1`;
const BASE_URL_FOR_DETAIL = `https://ohlcv-api.nomadcoders.workers.dev`;

export async function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export async function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export async function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export async function fetchCoinHistory(coinId: string) {
  return fetch(`${BASE_URL_FOR_DETAIL}?coinId=${coinId}`).then((response) =>
    response.json()
  );
}
