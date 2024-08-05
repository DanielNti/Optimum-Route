import { Landmark } from "../landmark/Landmark";

export type Location = {
  createdAt: Date;
  id: string;
  landmarks?: Array<Landmark>;
  latitude: number | null;
  longitude: number | null;
  name: string | null;
  updatedAt: Date;
};
