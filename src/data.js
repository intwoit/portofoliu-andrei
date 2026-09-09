const investments = [
{
    asset: "BTC",
    entries: [
      { amount: 560 / 69785.57, price: 69785.57 },
     ]
  },
{
    asset: "ETH",
    entries: [
      { amount: 300 / 2043.18, price: 2043.18 },
     ]
  },
{
 asset: "SOL",
    entries: [
      { amount: 210 / 86.71, price: 86.71 },
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