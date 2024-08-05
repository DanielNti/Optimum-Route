import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type LandmarkCreateInput = {
  description?: string | null;
  location?: LocationWhereUniqueInput | null;
  name?: string | null;
};
