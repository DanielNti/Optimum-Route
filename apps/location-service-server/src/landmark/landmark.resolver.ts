import * as graphql from "@nestjs/graphql";
import { LandmarkResolverBase } from "./base/landmark.resolver.base";
import { Landmark } from "./base/Landmark";
import { LandmarkService } from "./landmark.service";

@graphql.Resolver(() => Landmark)
export class LandmarkResolver extends LandmarkResolverBase {
  constructor(protected readonly service: LandmarkService) {
    super(service);
  }
}
