import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { StockTitle } from "../stock/StockTitle";

export const ExchangeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ceo" source="ceo" />
        <DateTimeInput label="closingTime" source="closingTime" />
        <TextInput label="country" source="country" />
        <TextInput label="currency" source="currency" />
        <DateTimeInput label="established" source="established" />
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
        <DateTimeInput label="openingTime" source="openingTime" />
        <ReferenceArrayInput
          source="stocks"
          reference="Stock"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StockTitle} />
        </ReferenceArrayInput>
        <TextInput label="timezone" source="timezone" />
      </SimpleForm>
    </Edit>
  );
};
