import { ApiProperty } from '@nestjs/swagger';

export class CreateSubjectStaffDto {
  @ApiProperty({ example: "123" })
	staff_id: number;

	@ApiProperty({ example: "123" })
	subject_id: number;
}
