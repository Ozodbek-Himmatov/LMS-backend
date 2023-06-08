import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestionsDto {
  @ApiProperty({ example: "123" })
	test_group_id: number;

	@ApiProperty({ example: "Haftada necha kun bor ?" })
	question: string;

	@ApiProperty({ example: "1" })
	correct_answers: number;

	;
}
