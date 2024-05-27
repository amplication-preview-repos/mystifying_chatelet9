import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EXCHANGE_TITLE_FIELD } from "../exchange/ExchangeTitle";

export const StockList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Stocks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="avgVolume" source="avgVolume" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dividendYield" source="dividendYield" />
        <ReferenceField
          label="exchange"
          source="exchange.id"
          reference="Exchange"
        >
          <TextField source={EXCHANGE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="industry" source="industry" />
        <TextField label="marketCap" source="marketCap" />
        <TextField label="name" source="name" />
        <TextField label="peRatio" source="peRatio" />
        <TextField label="price" source="price" />
        <TextField label="sector" source="sector" />
        <TextField label="ticker" source="ticker" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="website" source="website" />
      </Datagrid>
    </List>
  );
};
