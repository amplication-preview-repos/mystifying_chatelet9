import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TradeListRelationFilter } from "../trade/TradeListRelationFilter";

export type UserWhereInput = {
  accountBalance?: FloatNullableFilter;
  address?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  password?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  role?: "Option1";
  trades?: TradeListRelationFilter;
  username?: StringNullableFilter;
};
