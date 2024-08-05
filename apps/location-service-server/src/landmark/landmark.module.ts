import { Module } from "@nestjs/common";
import { LandmarkModuleBase } from "./base/landmark.module.base";
import { LandmarkService } from "./landmark.service";
import { LandmarkController } from "./landmark.controller";
import { LandmarkResolver } from "./landmark.resolver";

@Module({
  imports: [LandmarkModuleBase],
  controllers: [LandmarkController],
  providers: [LandmarkService, LandmarkResolver],
  exports: [LandmarkService],
})
export class LandmarkModule {}
