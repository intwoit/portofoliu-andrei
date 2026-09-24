const investments = [
{
  asset: "BTC",
  entries: [
    { amount: 590 / 70409.19, price: 70409.19 },
  ],
},
{
  asset: "ETH",
  entries: [
    { amount: 370 / 2138.97, price: 2138.97 },
  ],
},
{
  asset: "SOL",
  entries: [
    { amount: 410 / 98.40, price: 98.40 },
  ],
},


];

export const clientConfig = {
  startingInvestment: 1700,   // baseline fix
  split: { investor: 0.70, manager: 0.30 },
  targetDate: "2025-12-31",
  cashReserved: 300,
};

export default investments;