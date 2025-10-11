const investments = [
{
    asset: "BTC",
    entries: [
      { amount: 1642 / 112858.67, price: 112858.67 },
     ]
  },
{
    asset: "ETH",
    entries: [
      { amount: 735 / 3847, price: 3847 },
     ]
  },
{
 asset: "LINK",
    entries: [
      { amount: 100 / 15.94, price: 15.94 },
     ]
  },
{
 asset: "SOL",
    entries: [
      { amount: 0 / 222.50, price: 222.50 },
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