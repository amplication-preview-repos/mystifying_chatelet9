import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  accountBalance?: SortOrder;
  address?: SortOrder;
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  phoneNumber?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
