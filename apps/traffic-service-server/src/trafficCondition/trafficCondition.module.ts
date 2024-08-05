import { Module } from "@nestjs/common";
import { TrafficConditionModuleBase } from "./base/trafficCondition.module.base";
import { TrafficConditionService } from "./trafficCondition.service";
import { TrafficConditionController } from "./trafficCondition.controller";
import { TrafficConditionResolver } from "./trafficCondition.resolver";

@Module({
  imports: [TrafficConditionModuleBase],
  controllers: [TrafficConditionController],
  providers: [TrafficConditionService, TrafficConditionResolver],
  exports: [TrafficConditionService],
})
export class TrafficConditionModule {}
