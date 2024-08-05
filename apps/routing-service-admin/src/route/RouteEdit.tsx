import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DistanceCalculationTitle } from "../distanceCalculation/DistanceCalculationTitle";

export const RouteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
