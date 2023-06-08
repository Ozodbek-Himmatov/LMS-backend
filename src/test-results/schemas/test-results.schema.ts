import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type TestResultsDocument = HydratedDocument<TestResults>;

@Schema({ timestamps: true })
export class TestResults {
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Student'  }])
	student_id:mongoose.Schema.Types.ObjectId;

	@Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'TestGroup'  }])
	test_group_id:mongoose.Schema.Types.ObjectId;

	@Prop()
	correct_count:number;

	;
}

export const TestResultsSchema = SchemaFactory.createForClass(TestResults);
