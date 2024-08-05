import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LandmarkService } from "./landmark.service";
import { LandmarkControllerBase } from "./base/landmark.controller.base";

@swagger.ApiTags("landmarks")
@common.Controller("landmarks")
export class LandmarkController extends LandmarkControllerBase {
  constructor(protected readonly service: LandmarkService) {
    super(service);
  }
}
