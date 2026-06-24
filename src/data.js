const investments = [
{
    asset: "BTC",
    entries: [
      { amount: 310 / 67637, price: 67637 },
     ]
  },
{
    asset: "ETH",
    entries: [
      { amount: 150 / 1862, price: 1862 },
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