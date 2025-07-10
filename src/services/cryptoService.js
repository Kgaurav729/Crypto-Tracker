const COINGECKO_BASE_URL = import.meta.env.VITE_API_URL;

export async function fetchCryptoData(limit = 10) {
  try {
    const response = await fetch(`${COINGECKO_BASE_URL}/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false&price_change_percentage=24h,7d`
    );

    const data = await response.json();
    return data.map((coin)=>({
      id:coin.id,
      name:coin.name,
      symbol:coin.symbol.toUpperCase(),
      logo:coin.image,
      price:coin.current_price,
      change24h:coin.price_change_percentage_24h_in_currency,
      change7d:coin.price_change_percentage_7d_in_currency,
    })); 
  } catch (error) {
    console.error("Failed to fetch crypto data", error);
    return [];
  }
}
