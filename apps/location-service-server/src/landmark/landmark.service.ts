import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LandmarkServiceBase } from "./base/landmark.service.base";

@Injectable()
export class LandmarkService extends LandmarkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
