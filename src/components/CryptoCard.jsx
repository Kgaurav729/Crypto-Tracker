import { useEffect,useState } from "react";

function CryptoCard({ name, logo, price, change24h, change7d }) {
  const [mounted,setMounted]=useState(false);

  useEffect(()=>{
    const timeout=setTimeout(()=>setMounted(true),10);
    return ()=>clearTimeout(timeout);
  },[]);

  return (
    <div className={`overflow-hidden bg-amber-50 dark:bg-gray-800 shadow-md rounded-xl p-4 flex items-center gap-4 w-full h-full max-w-full
        transform transition duration-300 ease-in-out
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        hover:scale-105`}
    >
      <img src={logo} alt={`${name} logo`} className="w-12 h-12 flex-shrink-0" />

      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-bold truncate">{name}</h3>
        <p className="text-gray-600 dark:text-gray-300 truncate">₹ {price.toLocaleString()}</p>

        <div className="flex gap-4 mt-1 text-sm">
          <span className={change24h >= 0 ? "text-green-500" : "text-red-500"}>
            24h: {change24h}%
          </span>
          <span className={change7d >= 0 ? "text-green-500" : "text-red-500"}>
            7d: {change7d}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default CryptoCard;
