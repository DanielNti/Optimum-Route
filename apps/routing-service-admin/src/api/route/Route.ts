import { DistanceCalculation } from "../distanceCalculation/DistanceCalculation";

export type Route = {
  createdAt: Date;
  distance: number | null;
  distanceCalculations?: Array<DistanceCalculation>;
  endLocation: string | null;
  estimatedTime: number | null;
  id: string;
  startLocation: string | null;
  updatedAt: Date;
};
