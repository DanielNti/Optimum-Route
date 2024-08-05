import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TrafficConditionServiceBase } from "./base/trafficCondition.service.base";

@Injectable()
export class TrafficConditionService extends TrafficConditionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
