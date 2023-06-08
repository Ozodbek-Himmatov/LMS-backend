import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type QuestionsDocument = HydratedDocument<Questions>;

@Schema({ timestamps: true })
export class Questions {
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'TestGroup'  }])
	test_group_id:mongoose.Schema.Types.ObjectId;

	@Prop()
	question:string;

	@Prop()
	correct_answers:number;

	;
}

export const QuestionsSchema = SchemaFactory.createForClass(Questions);
