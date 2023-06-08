import { ApiProperty } from '@nestjs/swagger';

export class UpdateTestGroupDto {
  @ApiProperty({ example: "" })
	subject_id?: number;

	@ApiProperty({ example: "15" })
	tests_count?: number;

	@ApiProperty({ example: "19" })
	name?: string;

	@ApiProperty({ example: "30" })
	test_time?: string;

	;
}
