import { DistanceCalculationUpdateManyWithoutRoutesInput } from "./DistanceCalculationUpdateManyWithoutRoutesInput";

export type RouteUpdateInput = {
  distance?: number | null;
  distanceCalculations?: DistanceCalculationUpdateManyWithoutRoutesInput;
  endLocation?: string | null;
  estimatedTime?: number | null;
  startLocation?: string | null;
};
