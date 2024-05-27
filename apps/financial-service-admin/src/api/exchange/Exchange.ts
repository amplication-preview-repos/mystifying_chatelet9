import { Stock } from "../stock/Stock";

export type Exchange = {
  ceo: string | null;
  closingTime: Date | null;
  country: string | null;
  createdAt: Date;
  currency: string | null;
  established: Date | null;
  id: string;
  location: string | null;
  name: string | null;
  openingTime: Date | null;
  stocks?: Array<Stock>;
  timezone: string | null;
  updatedAt: Date;
};
