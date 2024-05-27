import { Stock } from "../stock/Stock";
import { User } from "../user/User";

export type Trade = {
  broker: string | null;
  createdAt: Date;
  date: Date | null;
  fees: number | null;
  id: string;
  price: number | null;
  quantity: number | null;
  status?: "Option1" | null;
  stock?: Stock | null;
  timestamp: Date | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
