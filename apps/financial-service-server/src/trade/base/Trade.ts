/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsDate,
  IsNumber,
  IsInt,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumTradeStatus } from "./EnumTradeStatus";
import { Stock } from "../../stock/base/Stock";
import { EnumTradeTypeField } from "./EnumTradeTypeField";
import { User } from "../../user/base/User";

@ObjectType()
class Trade {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  broker!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date!: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  fees!: number | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price!: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity!: number | null;

  @ApiProperty({
    required: false,
    enum: EnumTradeStatus,
  })
  @IsEnum(EnumTradeStatus)
  @IsOptional()
  @Field(() => EnumTradeStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => Stock,
  })
  @ValidateNested()
  @Type(() => Stock)
  @IsOptional()
  stock?: Stock | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timestamp!: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumTradeTypeField,
  })
  @IsEnum(EnumTradeTypeField)
  @IsOptional()
  @Field(() => EnumTradeTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;
}

export { Trade as Trade };