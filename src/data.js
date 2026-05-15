const investments = [
{
    asset: "BTC",
    entries: [
      { amount: 100 / 79426.16, price: 79426.16 },
     ]
  },
{
    asset: "ETH",
    entries: [
      { amount: 50 / 2256.10, price: 2256.10 },
     ]
  },
{
 asset: "SOL",
    entries: [
      { amount: 50 / 90.46, price: 90.46 },
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