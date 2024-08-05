import { SortOrder } from "../../util/SortOrder";

export type RouteOrderByInput = {
  createdAt?: SortOrder;
  distance?: SortOrder;
  endLocation?: SortOrder;
  estimatedTime?: SortOrder;
  id?: SortOrder;
  startLocation?: SortOrder;
  updatedAt?: SortOrder;
};
