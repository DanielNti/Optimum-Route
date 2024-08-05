import { DistanceCalculation as TDistanceCalculation } from "../api/distanceCalculation/DistanceCalculation";

export const DISTANCECALCULATION_TITLE_FIELD = "algorithmUsed";

export const DistanceCalculationTitle = (
  record: TDistanceCalculation
): string => {
  return record.algorithmUsed?.toString() || String(record.id);
};
