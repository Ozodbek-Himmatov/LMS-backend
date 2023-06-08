import { ApiProperty } from '@nestjs/swagger';

export class CreateGroupStaffDto {
  @ApiProperty({ example: "" })
	staff_id: number;

	@ApiProperty({ example: "" })
	group_id: number;

	;
}
