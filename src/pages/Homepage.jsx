import CryptoCard from "../components/CryptoCard";
import { useEffect,useState } from "react";
import { fetchCryptoData } from "../services/cryptoService";
import { use } from "react";
import { Button } from "@/components/ui/button";

function Homepage() {
  const [coins,setCoins]=useState([]);

  useEffect(()=>{
    async function loadData() {
      const data=await fetchCryptoData(12);
      setCoins(data);
    }
    loadData();
  },[]);
  return (
    <div className="p-4 flex flex-col items-center gap-6">
      <h2 className="text-2xl font-bold mb-2">Top Cryptocurrencies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
        {coins.map((coin) => (
          <CryptoCard key={coin.name} {...coin} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
