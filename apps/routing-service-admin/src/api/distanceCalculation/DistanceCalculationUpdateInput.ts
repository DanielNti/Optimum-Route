import { InputJsonValue } from "../../types";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type DistanceCalculationUpdateInput = {
  algorithmUsed?: string | null;
  result?: InputJsonValue;
  route?: RouteWhereUniqueInput | null;
};
