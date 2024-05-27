import { ExchangeWhereUniqueInput } from "../exchange/ExchangeWhereUniqueInput";
import { TradeCreateNestedManyWithoutStocksInput } from "./TradeCreateNestedManyWithoutStocksInput";

export type StockCreateInput = {
  avgVolume?: number | null;
  dividendYield?: number | null;
  exchange?: ExchangeWhereUniqueInput | null;
  industry?: string | null;
  marketCap?: number | null;
  name?: string | null;
  peRatio?: number | null;
  price?: number | null;
  sector?: string | null;
  ticker?: string | null;
  trades?: TradeCreateNestedManyWithoutStocksInput;
  website?: string | null;
};
