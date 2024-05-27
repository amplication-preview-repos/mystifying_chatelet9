import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TradeTitle } from "../trade/TradeTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="accountBalance" source="accountBalance" />
        <TextInput label="address" multiline source="address" />
        <DateTimeInput label="dateOfBirth" source="dateOfBirth" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="password" source="password" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <SelectInput
          source="role"
          label="role"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="trades"
          reference="Trade"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TradeTitle} />
        </ReferenceArrayInput>
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
