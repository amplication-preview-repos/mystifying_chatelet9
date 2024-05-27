import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { EXCHANGE_TITLE_FIELD } from "./ExchangeTitle";

export const ExchangeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Stock"
          target="exchangeId"
          label="Stocks"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
