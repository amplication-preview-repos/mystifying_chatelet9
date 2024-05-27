import { Trade } from "../trade/Trade";

export type User = {
  accountBalance: number | null;
  address: string | null;
  createdAt: Date;
  dateOfBirth: Date | null;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  password: string | null;
  phoneNumber: string | null;
  role?: "Option1" | null;
  trades?: Array<Trade>;
  updatedAt: Date;
  username: string | null;
};
