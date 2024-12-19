import {
  IsString,
  IsOptional,
  IsInt,
  IsPositive,
  IsUUID,
  IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  // @IsUUID()
  // readonly id: string;

  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsInt()
  @IsPositive()
  readonly price: number;

  @IsInt()
  @IsPositive()
  readonly quantity: number;

  // @IsDate()
  // @Type(() => Date)
  // readonly createdAt: Date;

  // @IsDate()
  // @Type(() => Date)
  // readonly updatedAt: Date;
}
