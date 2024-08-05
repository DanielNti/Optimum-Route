import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TrafficConditionService } from "./trafficCondition.service";
import { TrafficConditionControllerBase } from "./base/trafficCondition.controller.base";

@swagger.ApiTags("trafficConditions")
@common.Controller("trafficConditions")
export class TrafficConditionController extends TrafficConditionControllerBase {
  constructor(protected readonly service: TrafficConditionService) {
    super(service);
  }
}
