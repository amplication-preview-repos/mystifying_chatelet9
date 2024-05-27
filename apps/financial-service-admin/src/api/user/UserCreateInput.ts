import { TradeCreateNestedManyWithoutUsersInput } from "./TradeCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  accountBalance?: number | null;
  address?: string | null;
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string | null;
  phoneNumber?: string | null;
  role?: "Option1" | null;
  trades?: TradeCreateNestedManyWithoutUsersInput;
  username?: string | null;
};
