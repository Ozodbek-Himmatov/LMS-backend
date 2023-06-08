import { ApiProperty } from '@nestjs/swagger';

export class CreateSubjectsDto {
  @ApiProperty({ example: "Matematika" })
	name: string;

	;
}
