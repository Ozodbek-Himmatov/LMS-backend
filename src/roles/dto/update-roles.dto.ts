import { ApiProperty } from '@nestjs/swagger';

export class UpdateRolesDto {
  @ApiProperty({ example: "ADMIN" })
	name?: string;

	;
}
