import { JsonValue } from "type-fest";
import { Route } from "../route/Route";

export type DistanceCalculation = {
  algorithmUsed: string | null;
  createdAt: Date;
  id: string;
  result: JsonValue;
  route?: Route | null;
  updatedAt: Date;
};
