import { Trade as TTrade } from "../api/trade/Trade";

export const TRADE_TITLE_FIELD = "broker";

export const TradeTitle = (record: TTrade): string => {
  return record.broker?.toString() || String(record.id);
};
