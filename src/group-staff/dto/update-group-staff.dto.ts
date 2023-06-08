import { ApiProperty } from '@nestjs/swagger';

export class UpdateGroupStaffDto {
  @ApiProperty({ example: "" })
	staff_id?: number;

	@ApiProperty({ example: "" })
	group_id?: number;

	;
}
