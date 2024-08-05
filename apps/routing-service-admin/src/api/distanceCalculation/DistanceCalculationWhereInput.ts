import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type DistanceCalculationWhereInput = {
  algorithmUsed?: StringNullableFilter;
  id?: StringFilter;
  result?: JsonFilter;
  route?: RouteWhereUniqueInput;
};
