import { LandmarkWhereInput } from "./LandmarkWhereInput";
import { LandmarkOrderByInput } from "./LandmarkOrderByInput";

export type LandmarkFindManyArgs = {
  where?: LandmarkWhereInput;
  orderBy?: Array<LandmarkOrderByInput>;
  skip?: number;
  take?: number;
};
