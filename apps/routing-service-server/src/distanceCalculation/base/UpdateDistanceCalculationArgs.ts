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
import { DistanceCalculationWhereUniqueInput } from "./DistanceCalculationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DistanceCalculationUpdateInput } from "./DistanceCalculationUpdateInput";

@ArgsType()
class UpdateDistanceCalculationArgs {
  @ApiProperty({
    required: true,
    type: () => DistanceCalculationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DistanceCalculationWhereUniqueInput)
  @Field(() => DistanceCalculationWhereUniqueInput, { nullable: false })
  where!: DistanceCalculationWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DistanceCalculationUpdateInput,
  })
  @ValidateNested()
  @Type(() => DistanceCalculationUpdateInput)
  @Field(() => DistanceCalculationUpdateInput, { nullable: false })
  data!: DistanceCalculationUpdateInput;
}

export { UpdateDistanceCalculationArgs as UpdateDistanceCalculationArgs };
