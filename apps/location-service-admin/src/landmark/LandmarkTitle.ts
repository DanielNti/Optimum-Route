import { Landmark as TLandmark } from "../api/landmark/Landmark";

export const LANDMARK_TITLE_FIELD = "name";

export const LandmarkTitle = (record: TLandmark): string => {
  return record.name?.toString() || String(record.id);
};
