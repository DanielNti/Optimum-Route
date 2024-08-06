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
import { DataPointWhereInput } from "./DataPointWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DataPointOrderByInput } from "./DataPointOrderByInput";

@ArgsType()
class DataPointFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DataPointWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DataPointWhereInput, { nullable: true })
  @Type(() => DataPointWhereInput)
  where?: DataPointWhereInput;

  @ApiProperty({
    required: false,
    type: [DataPointOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DataPointOrderByInput], { nullable: true })
  @Type(() => DataPointOrderByInput)
  orderBy?: Array<DataPointOrderByInput>;

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

export { DataPointFindManyArgs as DataPointFindManyArgs };