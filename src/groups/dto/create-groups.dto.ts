import { ApiProperty } from '@nestjs/swagger';

export class CreateGroupsDto {
  @ApiProperty({ example: "N7 Bootcamp" })
	name: string;

	@ApiProperty({ example: "The best class" })
	description: string;

	@ApiProperty({ example: "2022" })
	start_year: string;

	;
}
