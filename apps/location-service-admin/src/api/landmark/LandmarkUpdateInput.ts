import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type LandmarkUpdateInput = {
  description?: string | null;
  location?: LocationWhereUniqueInput | null;
  name?: string | null;
};
