import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentsDto {
  @ApiProperty({ example: "Toshmat" })
	full_name: string;

	@ApiProperty({ example: "https://picsum.photos/1001/1000" })
	image: string;

	@ApiProperty({ example: "887038006" })
	phone: string;

	@ApiProperty({ example: "123login" })
	login: string;

	@ApiProperty({ example: "123password" })
	password: string;

	@ApiProperty({ example: "" })
	group_id: number;

	@ApiProperty({ example: "email@gmail.com" })
	email: string;

	@ApiProperty({ example: "@user" })
	tg_name: string;

	@ApiProperty({ example: "" })
	token: string;

	;
}
