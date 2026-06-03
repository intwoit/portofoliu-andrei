const investments = [
{
    asset: "BTC",
    entries: [
      { amount: 210 / 71970, price: 71970 },
     ]
  },
{
    asset: "ETH",
    entries: [
      { amount: 100 / 2028, price: 2028 },
     ]
  },
{
 asset: "SOL",
    entries: [
      { amount: 90 / 82.18, price: 82.18 },
     ]
  },


];

export const clientConfig = {
  startingInvestment: 1700,   // baseline fix
  split: { investor: 0.70, manager: 0.30 },
  targetDate: "2025-12-31",
  cashReserved: 300,
};

export default investments;