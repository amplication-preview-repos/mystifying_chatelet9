import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ExchangeWhereUniqueInput } from "../exchange/ExchangeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TradeListRelationFilter } from "../trade/TradeListRelationFilter";

export type StockWhereInput = {
  avgVolume?: IntNullableFilter;
  dividendYield?: FloatNullableFilter;
  exchange?: ExchangeWhereUniqueInput;
  id?: StringFilter;
  industry?: StringNullableFilter;
  marketCap?: FloatNullableFilter;
  name?: StringNullableFilter;
  peRatio?: FloatNullableFilter;
  price?: FloatNullableFilter;
  sector?: StringNullableFilter;
  ticker?: StringNullableFilter;
  trades?: TradeListRelationFilter;
  website?: StringNullableFilter;
};
