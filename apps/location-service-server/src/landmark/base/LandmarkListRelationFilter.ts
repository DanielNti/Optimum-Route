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
import { LandmarkWhereInput } from "./LandmarkWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LandmarkListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LandmarkWhereInput,
  })
  @ValidateNested()
  @Type(() => LandmarkWhereInput)
  @IsOptional()
  @Field(() => LandmarkWhereInput, {
    nullable: true,
  })
  every?: LandmarkWhereInput;

  @ApiProperty({
    required: false,
    type: () => LandmarkWhereInput,
  })
  @ValidateNested()
  @Type(() => LandmarkWhereInput)
  @IsOptional()
  @Field(() => LandmarkWhereInput, {
    nullable: true,
  })
  some?: LandmarkWhereInput;

  @ApiProperty({
    required: false,
    type: () => LandmarkWhereInput,
  })
  @ValidateNested()
  @Type(() => LandmarkWhereInput)
  @IsOptional()
  @Field(() => LandmarkWhereInput, {
    nullable: true,
  })
  none?: LandmarkWhereInput;
}
export { LandmarkListRelationFilter as LandmarkListRelationFilter };