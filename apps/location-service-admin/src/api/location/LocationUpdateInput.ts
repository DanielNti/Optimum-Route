import { LandmarkUpdateManyWithoutLocationsInput } from "./LandmarkUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  landmarks?: LandmarkUpdateManyWithoutLocationsInput;
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
};
