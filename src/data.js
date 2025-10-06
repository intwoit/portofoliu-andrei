const investments = [
{
    asset: "BTC",
    entries: [
      { amount: 1018 / 111697.50, price: 111697.50 },
     ]
  },
{
    asset: "ETH",
    entries: [
      { amount: 810 / 4221.60, price: 4221.60 },
     ]
  },
{
 asset: "LINK",
    entries: [
      { amount: 300 / 22.39, price: 22.39 },
     ]
  },
{
 asset: "SOL",
    entries: [
      { amount: 200 / 222.50, price: 222.50 },
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