import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DistanceCalculationListRelationFilter } from "../distanceCalculation/DistanceCalculationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RouteWhereInput = {
  distance?: FloatNullableFilter;
  distanceCalculations?: DistanceCalculationListRelationFilter;
  endLocation?: StringNullableFilter;
  estimatedTime?: FloatNullableFilter;
  id?: StringFilter;
  startLocation?: StringNullableFilter;
};
