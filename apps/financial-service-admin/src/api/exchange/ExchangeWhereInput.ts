import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StockListRelationFilter } from "../stock/StockListRelationFilter";

export type ExchangeWhereInput = {
  ceo?: StringNullableFilter;
  closingTime?: DateTimeNullableFilter;
  country?: StringNullableFilter;
  currency?: StringNullableFilter;
  established?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  openingTime?: DateTimeNullableFilter;
  stocks?: StockListRelationFilter;
  timezone?: StringNullableFilter;
};
