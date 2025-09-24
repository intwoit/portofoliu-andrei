const investments = [
{
    asset: "BTC",
    entries: [
      { amount: 560 / 113280.45, price: 113280.45 },
     ]
  },
{
    asset: "ETH",
    entries: [
      { amount: 300 / 4151.40, price: 4151.40 },
     ]
  },
{
 asset: "LINK",
    entries: [
      { amount: 100 / 21.61, price: 21.61 },
     ]
  },
{
 asset: "SOL",
    entries: [
      { amount: 100 / 211.79, price: 211.79 },
     ]
  },


];

export const clientConfig = {
  startingInvestment: 1700,   // baseline fix
  split: { investor: 0.70, manager: 0.30 },
  targetDate: "2025-12-31",
  cashReserved: 0,
};

export default investments;