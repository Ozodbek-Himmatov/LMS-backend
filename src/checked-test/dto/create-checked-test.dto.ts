import { ApiProperty } from '@nestjs/swagger';

export class CreateCheckedTestDto {
  @ApiProperty({ example: "123" })
	question_id: number;

	@ApiProperty({ example: "123" })
	answer_id: number;

	@ApiProperty({ example: "123" })
	student_id: number;

	;
}
