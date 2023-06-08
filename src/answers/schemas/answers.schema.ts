import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type AnswersDocument = HydratedDocument<Answers>;

@Schema({ timestamps: true })
export class Answers {
  @Prop()
	answer:string;

	@Prop()
	question:string;

	@Prop()
	correct_answers:number;

	;
}

export const AnswersSchema = SchemaFactory.createForClass(Answers);
