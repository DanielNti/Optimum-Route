import * as graphql from "@nestjs/graphql";
import { UserPreferenceResolverBase } from "./base/userPreference.resolver.base";
import { UserPreference } from "./base/UserPreference";
import { UserPreferenceService } from "./userPreference.service";

@graphql.Resolver(() => UserPreference)
export class UserPreferenceResolver extends UserPreferenceResolverBase {
  constructor(protected readonly service: UserPreferenceService) {
    super(service);
  }
}
