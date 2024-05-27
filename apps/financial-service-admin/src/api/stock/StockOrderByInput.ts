import { SortOrder } from "../../util/SortOrder";

export type StockOrderByInput = {
  avgVolume?: SortOrder;
  createdAt?: SortOrder;
  dividendYield?: SortOrder;
  exchangeId?: SortOrder;
  id?: SortOrder;
  industry?: SortOrder;
  marketCap?: SortOrder;
  name?: SortOrder;
  peRatio?: SortOrder;
  price?: SortOrder;
  sector?: SortOrder;
  ticker?: SortOrder;
  updatedAt?: SortOrder;
  website?: SortOrder;
};
