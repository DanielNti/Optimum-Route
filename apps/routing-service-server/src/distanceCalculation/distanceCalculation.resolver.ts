import * as graphql from "@nestjs/graphql";
import { DistanceCalculationResolverBase } from "./base/distanceCalculation.resolver.base";
import { DistanceCalculation } from "./base/DistanceCalculation";
import { DistanceCalculationService } from "./distanceCalculation.service";

@graphql.Resolver(() => DistanceCalculation)
export class DistanceCalculationResolver extends DistanceCalculationResolverBase {
  constructor(protected readonly service: DistanceCalculationService) {
    super(service);
  }
}
