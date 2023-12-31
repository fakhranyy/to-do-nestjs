import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTaskDto {

  // @IsNotEmpty()
  id: number;
  
  @ApiProperty({
    description: 'Name of the task',
    example: 'Go gym - Do home work - seeking for job'
  })
  @IsNotEmpty()
  @IsString()
  title: string;
  
//   @ApiProperty({
//     description: 'Boolean value describe what if it finshed or not',
//     example: 'It will be true or false'
// })
  // @IsBoolean()
  // @IsNotEmpty()
  // is_Done: boolean;

  @IsNumber()
  user_id: number;


}
