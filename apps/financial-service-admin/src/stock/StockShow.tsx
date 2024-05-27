import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { STOCK_TITLE_FIELD } from "./StockTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { EXCHANGE_TITLE_FIELD } from "../exchange/ExchangeTitle";

export const StockShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="Trade" target="stockId" label="Trades">
          <Datagrid rowClick="show">
            <TextField label="broker" source="broker" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="fees" source="fees" />
            <TextField label="ID" source="id" />
            <TextField label="price" source="price" />
            <TextField label="quantity" source="quantity" />
            <TextField label="status" source="status" />
            <ReferenceField label="Stock" source="stock.id" reference="Stock">
              <TextField source={STOCK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="timestamp" source="timestamp" />
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
