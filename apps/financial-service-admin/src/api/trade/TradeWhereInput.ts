import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StockWhereUniqueInput } from "../stock/StockWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TradeWhereInput = {
  broker?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  fees?: FloatNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
  status?: "Option1";
  stock?: StockWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
  typeField?: "Option1";
  user?: UserWhereUniqueInput;
};
