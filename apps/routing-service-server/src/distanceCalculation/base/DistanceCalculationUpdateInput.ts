/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { RouteWhereUniqueInput } from "../../route/base/RouteWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class DistanceCalculationUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  algorithmUsed?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  result?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => RouteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RouteWhereUniqueInput)
  @IsOptional()
  @Field(() => RouteWhereUniqueInput, {
    nullable: true,
  })
  route?: RouteWhereUniqueInput | null;
}

export { DistanceCalculationUpdateInput as DistanceCalculationUpdateInput };
