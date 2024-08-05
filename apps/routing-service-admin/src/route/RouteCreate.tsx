import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DistanceCalculationTitle } from "../distanceCalculation/DistanceCalculationTitle";

export const RouteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="distance" source="distance" />
        <ReferenceArrayInput
          source="distanceCalculations"
          reference="DistanceCalculation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DistanceCalculationTitle} />
        </ReferenceArrayInput>
        <TextInput label="endLocation" source="endLocation" />
        <NumberInput label="estimatedTime" source="estimatedTime" />
        <TextInput label="startLocation" source="startLocation" />
      </SimpleForm>
    </Create>
  );
};
