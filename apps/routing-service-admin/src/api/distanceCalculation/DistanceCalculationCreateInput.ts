import { InputJsonValue } from "../../types";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type DistanceCalculationCreateInput = {
  algorithmUsed?: string | null;
  result?: InputJsonValue;
  route?: RouteWhereUniqueInput | null;
};
