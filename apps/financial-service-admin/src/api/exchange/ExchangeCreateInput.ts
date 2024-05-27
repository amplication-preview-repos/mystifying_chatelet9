import { StockCreateNestedManyWithoutExchangesInput } from "./StockCreateNestedManyWithoutExchangesInput";

export type ExchangeCreateInput = {
  ceo?: string | null;
  closingTime?: Date | null;
  country?: string | null;
  currency?: string | null;
  established?: Date | null;
  location?: string | null;
  name?: string | null;
  openingTime?: Date | null;
  stocks?: StockCreateNestedManyWithoutExchangesInput;
  timezone?: string | null;
};
