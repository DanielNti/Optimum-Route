import { StringFilter } from "../../util/StringFilter";
import { LandmarkListRelationFilter } from "../landmark/LandmarkListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LocationWhereInput = {
  id?: StringFilter;
  landmarks?: LandmarkListRelationFilter;
  latitude?: FloatNullableFilter;
  longitude?: FloatNullableFilter;
  name?: StringNullableFilter;
};
