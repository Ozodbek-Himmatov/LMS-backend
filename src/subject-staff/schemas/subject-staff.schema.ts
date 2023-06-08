import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type SubjectStaffDocument = HydratedDocument<SubjectStaff>;

@Schema({ timestamps: true })
export class SubjectStaff {
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Staffs'  }])
	staff_id:mongoose.Schema.Types.ObjectId;

	@Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Subjects'  }])
	subject_id:mongoose.Schema.Types.ObjectId;

	;
}

export const SubjectStaffSchema = SchemaFactory.createForClass(SubjectStaff);
