import { ApiProperty } from '@nestjs/swagger';

export class UpdateGroupsDto {
  @ApiProperty({ example: "N7 Bootcamp" })
	name?: string;

	@ApiProperty({ example: "The best class" })
	description?: string;

	@ApiProperty({ example: "2022" })
	start_year?: string;

	;
}
