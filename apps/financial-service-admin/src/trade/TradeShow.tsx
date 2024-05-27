import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { STOCK_TITLE_FIELD } from "../stock/StockTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TradeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
