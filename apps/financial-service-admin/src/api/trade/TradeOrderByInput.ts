import { SortOrder } from "../../util/SortOrder";

export type TradeOrderByInput = {
  broker?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  fees?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  status?: SortOrder;
  stockId?: SortOrder;
  timestamp?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
