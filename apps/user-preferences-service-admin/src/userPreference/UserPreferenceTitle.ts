import { UserPreference as TUserPreference } from "../api/userPreference/UserPreference";

export const USERPREFERENCE_TITLE_FIELD = "id";

export const UserPreferenceTitle = (record: TUserPreference): string => {
  return record.id?.toString() || String(record.id);
};
