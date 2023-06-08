import { ApiProperty } from '@nestjs/swagger';

export class CreateTestResultsDto {
  @ApiProperty({ example: "123" })
	student_id: number;

	@ApiProperty({ example: "123" })
	test_group_id: number;

	@ApiProperty({ example: "12" })
	correct_count: number;

	;
}
