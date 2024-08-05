import { Module } from "@nestjs/common";
import { UserPreferenceModuleBase } from "./base/userPreference.module.base";
import { UserPreferenceService } from "./userPreference.service";
import { UserPreferenceController } from "./userPreference.controller";
import { UserPreferenceResolver } from "./userPreference.resolver";

@Module({
  imports: [UserPreferenceModuleBase],
  controllers: [UserPreferenceController],
  providers: [UserPreferenceService, UserPreferenceResolver],
  exports: [UserPreferenceService],
})
export class UserPreferenceModule {}
