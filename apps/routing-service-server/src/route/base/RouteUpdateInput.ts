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
  IsNumber,
  Min,
  Max,
  IsOptional,
  ValidateNested,
  IsString,
  MaxLength,
} from "class-validator";
import { DistanceCalculationUpdateManyWithoutRoutesInput } from "./DistanceCalculationUpdateManyWithoutRoutesInput";
import { Type } from "class-transformer";

@InputType()
class RouteUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  distance?: number | null;

  @ApiProperty({
    required: false,
    type: () => DistanceCalculationUpdateManyWithoutRoutesInput,
  })
  @ValidateNested()
  @Type(() => DistanceCalculationUpdateManyWithoutRoutesInput)
  @IsOptional()
  @Field(() => DistanceCalculationUpdateManyWithoutRoutesInput, {
    nullable: true,
  })
  distanceCalculations?: DistanceCalculationUpdateManyWithoutRoutesInput;

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
  endLocation?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  estimatedTime?: number | null;

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
  startLocation?: string | null;
}

export { RouteUpdateInput as RouteUpdateInput };