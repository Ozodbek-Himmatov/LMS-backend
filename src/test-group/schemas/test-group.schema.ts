import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type TestGroupDocument = HydratedDocument<TestGroup>;

@Schema({ timestamps: true })
export class TestGroup {
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Subjects'  }])
	subject_id:mongoose.Schema.Types.ObjectId;

	@Prop()
	tests_count:number;

	@Prop()
	name:string;

	@Prop()
	test_time:string;

	;
}

export const TestGroupSchema = SchemaFactory.createForClass(TestGroup);
