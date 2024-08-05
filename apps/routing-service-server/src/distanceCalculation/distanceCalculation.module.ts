import { Module } from "@nestjs/common";
import { DistanceCalculationModuleBase } from "./base/distanceCalculation.module.base";
import { DistanceCalculationService } from "./distanceCalculation.service";
import { DistanceCalculationController } from "./distanceCalculation.controller";
import { DistanceCalculationResolver } from "./distanceCalculation.resolver";

@Module({
  imports: [DistanceCalculationModuleBase],
  controllers: [DistanceCalculationController],
  providers: [DistanceCalculationService, DistanceCalculationResolver],
  exports: [DistanceCalculationService],
})
export class DistanceCalculationModule {}
