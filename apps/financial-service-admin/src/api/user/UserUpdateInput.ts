import { TradeUpdateManyWithoutUsersInput } from "./TradeUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  accountBalance?: number | null;
  address?: string | null;
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string | null;
  phoneNumber?: string | null;
  role?: "Option1" | null;
  trades?: TradeUpdateManyWithoutUsersInput;
  username?: string | null;
};
