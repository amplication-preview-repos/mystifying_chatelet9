import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ExchangeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Exchanges"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ceo" source="ceo" />
        <TextField label="closingTime" source="closingTime" />
        <TextField label="country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="currency" source="currency" />
        <TextField label="established" source="established" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="name" source="name" />
        <TextField label="openingTime" source="openingTime" />
        <TextField label="timezone" source="timezone" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
