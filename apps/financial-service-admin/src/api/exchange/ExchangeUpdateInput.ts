import { StockUpdateManyWithoutExchangesInput } from "./StockUpdateManyWithoutExchangesInput";

export type ExchangeUpdateInput = {
  ceo?: string | null;
  closingTime?: Date | null;
  country?: string | null;
  currency?: string | null;
  established?: Date | null;
  location?: string | null;
  name?: string | null;
  openingTime?: Date | null;
  stocks?: StockUpdateManyWithoutExchangesInput;
  timezone?: string | null;
};
