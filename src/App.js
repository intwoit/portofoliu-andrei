import React, { useEffect, useState } from 'react';
import investments from './data';
import './index.css';

const STARTING_BASELINE = 1700;     // $1,700 fix
const INVESTOR_RATE     = 0.70;     // Andrei 70%
const MANAGER_RATE      = 0.30;     // Alex 30%
const CASH_RESERVED     = 300;

function App() {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);

  // 👇 autentificare simplă cu parolă
  const [authenticated, setAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');

useEffect(() => {
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,chainlink,fetch-ai,cardano,solana&vs_currencies=usd')
    .then(res => res.json())
    .then(data => {
      const formatted = {
        BTC: data.bitcoin?.usd ?? 0,
        ETH: data.ethereum?.usd ?? 0,
        LINK: data.chainlink?.usd ?? 0,
        FET: data["fetch-ai"]?.usd ?? 0,
        ADA: data.cardano?.usd ?? 0,
        SOL: data.solana?.usd ?? 0,   // 👈 nou
      };
      setPrices(formatted);
      setLoading(false);
    })
    .catch(err => {
      console.error('Failed to fetch prices:', err);
      setLoading(false);
      });
  }, []);

  // 👇 blocare aplicație până la introducerea parolei corecte
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-mono">
        <h2 className="text-2xl mb-4 text-cyan-400">Private Access</h2>
        <input
          type="password"
          placeholder="Enter password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          className="p-2 rounded bg-gray-800 border border-cyan-500 mb-4 text-white"
        />
        <button
          onClick={() => {
            if (passwordInput === 'andrei2025') {
              setAuthenticated(true);
            } else {
              alert('Wrong password');
            }
          }}
          className="bg-cyan-500 text-black px-4 py-2 rounded hover:bg-cyan-400"
        >
          Enter
        </button>
      </div>
    );
  }

  const processedData = investments.map(inv => {
  const coinInvestment = inv.entries.reduce((sum, e) => sum + e.amount * e.price, 0);
  const totalAmount = inv.entries.reduce((sum, e) => sum + e.amount, 0);

  const avgPrice = totalAmount > 0 ? coinInvestment / totalAmount : 0; // <-- obligatoriu

  const livePrice = prices[inv.asset] ?? 0;
  const value = totalAmount * livePrice;
  const pnl = avgPrice > 0 ? ((livePrice - avgPrice) / avgPrice) * 100 : 0;

  return {
    asset: inv.asset,
    investment: coinInvestment, // <-- deja ok
    averagePrice: avgPrice,
    amount: totalAmount,
    livePrice,
    value,
    pnl,
  };
});

const cryptoValue = processedData.reduce((sum, item) => sum + item.value, 0);
const totalValue = cryptoValue + CASH_RESERVED;

// baseline fix de la care începi împărțirea
const base = STARTING_BASELINE;

// profitul eligibil pentru split = DOAR ce depășește baseline-ul
const profitAboveBase = Math.max(0, totalValue - base);

// împărțirea 70/30 DOAR din profitul peste baseline
const andreiShare = INVESTOR_RATE * profitAboveBase;
const alexShare   = MANAGER_RATE  * profitAboveBase;


  const format = (val, decimals = 2) => Number(val).toFixed(decimals);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-black via-gray-900 to-gray-800 text-white p-6 font-mono">
      <h1 className="text-3xl text-cyan-400 font-bold mb-8 border-b border-cyan-700 pb-2">
        Andrei Crypto Tracker
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-cyan-700 text-left">
          <thead className="bg-cyan-900 text-cyan-200">
            <tr>
              <th className="px-4 py-2">Asset</th>
              <th className="px-4 py-2">Investment</th>
              <th className="px-4 py-2">Average Price</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Live Price</th>
              <th className="px-4 py-2">Value</th>
              <th className="px-4 py-2">P/L (%)</th>
            </tr>
          </thead>
          <tbody>
            {processedData.map((coin) => (
              <tr key={coin.asset} className="border-b border-cyan-800 hover:bg-gray-800">
                <td className="px-4 py-2 font-bold text-cyan-300">{coin.asset}</td>
                <td className="px-4 py-2">${format(coin.investment)}</td>
                <td className="px-4 py-2">${format(coin.averagePrice, 4)}</td>
                <td className="px-4 py-2">{format(coin.amount, 5)}</td>
                <td className="px-4 py-2">{loading ? 'Loading...' : `$${format(coin.livePrice, 4)}`}</td>
                <td className="px-4 py-2">${format(coin.value)}</td>
                <td className={`px-4 py-2 font-bold ${coin.pnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {coin.pnl >= 0 ? '+' : ''}{format(coin.pnl, 2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!loading && (
<div className="mt-8 space-y-2 text-cyan-200 text-xs">
  <p><strong>Starting Investment (baseline):</strong> ${format(base)}</p>
  <p><strong>Profit above baseline:</strong> ${format(profitAboveBase)}</p>
  <p><strong>Cash:</strong> ${format(CASH_RESERVED)}</p>
  <p><strong>Andrei’s Share (70% over baseline):</strong> ${format(andreiShare)}</p>
  <p><strong>Alex’s Share (30% over baseline):</strong> ${format(alexShare)}</p>
</div>

      )}
    </div>
  );
}

export default App;
