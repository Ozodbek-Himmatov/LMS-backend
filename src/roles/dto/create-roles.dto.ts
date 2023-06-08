import { ApiProperty } from '@nestjs/swagger';

export class CreateRolesDto {
  @ApiProperty({ example: "ADMIN" })
	name: string;

	;
}
