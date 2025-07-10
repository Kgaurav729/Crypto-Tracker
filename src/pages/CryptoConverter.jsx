import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

import { fetchCryptoData } from "../services/cryptoService";

function CryptoConverter() {
  const [coins, setCoins] = useState([]);
  const [fromCoin, setFromCoin] = useState("");
  const [toCoin, setToCoin] = useState("");
  const [amount, setAmount] = useState(1);
  const [convertedValue, setConvertedValue] = useState(null);

  useEffect(() => {
    const loadCoins = async () => {
      const data = await fetchCryptoData(20);
      setCoins(data);
    };
    loadCoins();
  }, []);

  const handleConvert = () => {
    const from = coins.find((c) => c.symbol === fromCoin);
    const to = coins.find((c) => c.symbol === toCoin);

    if (from && to) {
      const value = (amount * from.price) / to.price;
      setConvertedValue(value);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      <h2 className="text-2xl font-bold text-center">Crypto Converter</h2>

      <div className="space-y-2">
        <Label>Amount</Label>
        <Input
          type="number"
          min={0}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label>From</Label>
        <Select onValueChange={setFromCoin}>
          <SelectTrigger>
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent>
            {coins.map((coin) => (
              <SelectItem key={coin.id} value={coin.symbol}>
                {coin.symbol}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>To</Label>
        <Select onValueChange={setToCoin}>
          <SelectTrigger>
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent>
            {coins.map((coin) => (
              <SelectItem key={coin.id} value={coin.symbol}>
                {coin.symbol}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button className="w-full mt-2" onClick={handleConvert}>
        Convert
      </Button>

      {convertedValue !== null && (
        <p className="text-lg text-center font-semibold mt-4">
          {amount} {fromCoin} ≈ {convertedValue.toFixed(4)} {toCoin}
        </p>
      )}
    </div>
  );
}

export default CryptoConverter;
