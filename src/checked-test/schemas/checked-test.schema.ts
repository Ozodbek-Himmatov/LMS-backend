import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CheckedTestDocument = HydratedDocument<CheckedTest>;

@Schema({ timestamps: true })
export class CheckedTest {
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Students'  }])
	question_id:mongoose.Schema.Types.ObjectId;

	@Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'TestGroup'  }])
	answer_id:mongoose.Schema.Types.ObjectId;

	@Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Students'  }])
	student_id:mongoose.Schema.Types.ObjectId;

	;
}

export const CheckedTestSchema = SchemaFactory.createForClass(CheckedTest);
