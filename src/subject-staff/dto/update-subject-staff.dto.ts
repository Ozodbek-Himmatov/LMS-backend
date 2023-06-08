import { ApiProperty } from '@nestjs/swagger';

export class UpdateSubjectStaffDto {
  @ApiProperty({ example: "123" })
	staff_id?: number;

	@ApiProperty({ example: "123" })
	subject_id?: number;

	;
}
