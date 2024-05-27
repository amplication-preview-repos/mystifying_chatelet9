import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ExchangeTitle } from "../exchange/ExchangeTitle";
import { TradeTitle } from "../trade/TradeTitle";

export const StockEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="avgVolume" source="avgVolume" />
        <NumberInput label="dividendYield" source="dividendYield" />
        <ReferenceInput
          source="exchange.id"
          reference="Exchange"
          label="exchange"
        >
          <SelectInput optionText={ExchangeTitle} />
        </ReferenceInput>
        <TextInput label="industry" source="industry" />
        <NumberInput label="marketCap" source="marketCap" />
        <TextInput label="name" source="name" />
        <NumberInput label="peRatio" source="peRatio" />
        <NumberInput label="price" source="price" />
        <TextInput label="sector" source="sector" />
        <TextInput label="ticker" source="ticker" />
        <ReferenceArrayInput
          source="trades"
          reference="Trade"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TradeTitle} />
        </ReferenceArrayInput>
        <TextInput label="website" source="website" />
      </SimpleForm>
    </Edit>
  );
};
