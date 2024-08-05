import { DistanceCalculationCreateNestedManyWithoutRoutesInput } from "./DistanceCalculationCreateNestedManyWithoutRoutesInput";

export type RouteCreateInput = {
  distance?: number | null;
  distanceCalculations?: DistanceCalculationCreateNestedManyWithoutRoutesInput;
  endLocation?: string | null;
  estimatedTime?: number | null;
  startLocation?: string | null;
};
