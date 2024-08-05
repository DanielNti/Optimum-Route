import * as graphql from "@nestjs/graphql";
import { TrafficConditionResolverBase } from "./base/trafficCondition.resolver.base";
import { TrafficCondition } from "./base/TrafficCondition";
import { TrafficConditionService } from "./trafficCondition.service";

@graphql.Resolver(() => TrafficCondition)
export class TrafficConditionResolver extends TrafficConditionResolverBase {
  constructor(protected readonly service: TrafficConditionService) {
    super(service);
  }
}
