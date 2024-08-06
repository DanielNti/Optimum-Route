/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserPreferenceWhereInput } from "./UserPreferenceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserPreferenceOrderByInput } from "./UserPreferenceOrderByInput";

@ArgsType()
class UserPreferenceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserPreferenceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserPreferenceWhereInput, { nullable: true })
  @Type(() => UserPreferenceWhereInput)
  where?: UserPreferenceWhereInput;

  @ApiProperty({
    required: false,
    type: [UserPreferenceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserPreferenceOrderByInput], { nullable: true })
  @Type(() => UserPreferenceOrderByInput)
  orderBy?: Array<UserPreferenceOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UserPreferenceFindManyArgs as UserPreferenceFindManyArgs };