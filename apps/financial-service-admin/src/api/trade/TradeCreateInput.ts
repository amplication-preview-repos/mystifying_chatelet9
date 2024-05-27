import { StockWhereUniqueInput } from "../stock/StockWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TradeCreateInput = {
  broker?: string | null;
  date?: Date | null;
  fees?: number | null;
  price?: number | null;
  quantity?: number | null;
  status?: "Option1" | null;
  stock?: StockWhereUniqueInput | null;
  timestamp?: Date | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
