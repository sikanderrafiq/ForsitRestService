import { IsNumber, IsString, ValidateNested } from 'class-validator';

class CreateInventoryDto {
  @IsString()
  public itemName: string;

  @IsString()
  public description: string;

  @IsNumber()
  public quantity: number;

}

export default CreateInventoryDto;
