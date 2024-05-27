import { Exchange } from "../exchange/Exchange";
import { Trade } from "../trade/Trade";

export type Stock = {
  avgVolume: number | null;
  createdAt: Date;
  dividendYield: number | null;
  exchange?: Exchange | null;
  id: string;
  industry: string | null;
  marketCap: number | null;
  name: string | null;
  peRatio: number | null;
  price: number | null;
  sector: string | null;
  ticker: string | null;
  trades?: Array<Trade>;
  updatedAt: Date;
  website: string | null;
};
