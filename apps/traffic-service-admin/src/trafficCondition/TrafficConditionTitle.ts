import { TrafficCondition as TTrafficCondition } from "../api/trafficCondition/TrafficCondition";

export const TRAFFICCONDITION_TITLE_FIELD = "id";

export const TrafficConditionTitle = (record: TTrafficCondition): string => {
  return record.id?.toString() || String(record.id);
};
