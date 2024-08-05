import { Location } from "../location/Location";

export type Landmark = {
  createdAt: Date;
  description: string | null;
  id: string;
  location?: Location | null;
  name: string | null;
  updatedAt: Date;
};
