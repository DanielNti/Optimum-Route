import { DistanceCalculationWhereInput } from "./DistanceCalculationWhereInput";
import { DistanceCalculationOrderByInput } from "./DistanceCalculationOrderByInput";

export type DistanceCalculationFindManyArgs = {
  where?: DistanceCalculationWhereInput;
  orderBy?: Array<DistanceCalculationOrderByInput>;
  skip?: number;
  take?: number;
};
