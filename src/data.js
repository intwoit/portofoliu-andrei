const investments = [
{
    asset: "BTC",
    entries: [
      { amount: 1403 / 112858.67, price: 112858.67 },
     ]
  },
{
    asset: "ETH",
    entries: [
      { amount: 785 / 3669, price: 3669 },
     ]
  },
{
 asset: "LINK",
    entries: [
      { amount: 100 / 15.94, price: 15.94 },
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