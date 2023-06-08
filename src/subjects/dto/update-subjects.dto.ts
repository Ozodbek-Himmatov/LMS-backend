import { ApiProperty } from '@nestjs/swagger';

export class UpdateSubjectsDto {
  @ApiProperty({ example: "Matematika" })
	name?: string;

	;
}
