import { TrafficConditionWhereInput } from "./TrafficConditionWhereInput";
import { TrafficConditionOrderByInput } from "./TrafficConditionOrderByInput";

export type TrafficConditionFindManyArgs = {
  where?: TrafficConditionWhereInput;
  orderBy?: Array<TrafficConditionOrderByInput>;
  skip?: number;
  take?: number;
};
