import { ApiProperty } from '@nestjs/swagger';

export class CreateAnswersDto {
  @ApiProperty({ example: "" })
	answer: string;

	@ApiProperty({ example: "123" })
	question: string;

	@ApiProperty({ example: "1" })
	correct_answers: number;

	;
}
