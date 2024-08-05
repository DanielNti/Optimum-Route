import { LandmarkCreateNestedManyWithoutLocationsInput } from "./LandmarkCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  landmarks?: LandmarkCreateNestedManyWithoutLocationsInput;
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
};
