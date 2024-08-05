import { SortOrder } from "../../util/SortOrder";

export type DistanceCalculationOrderByInput = {
  algorithmUsed?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  result?: SortOrder;
  routeId?: SortOrder;
  updatedAt?: SortOrder;
};
