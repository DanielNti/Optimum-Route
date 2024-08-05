import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DistanceCalculationService } from "./distanceCalculation.service";
import { DistanceCalculationControllerBase } from "./base/distanceCalculation.controller.base";

@swagger.ApiTags("distanceCalculations")
@common.Controller("distanceCalculations")
export class DistanceCalculationController extends DistanceCalculationControllerBase {
  constructor(protected readonly service: DistanceCalculationService) {
    super(service);
  }
}
