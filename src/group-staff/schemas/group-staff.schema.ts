import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type GroupStaffDocument = HydratedDocument<GroupStaff>;

@Schema({ timestamps: true })
export class GroupStaff {
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Staffs'  }])
	staff_id:mongoose.Schema.Types.ObjectId;

	@Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Groups'  }])
	group_id:mongoose.Schema.Types.ObjectId;

	;
}

export const GroupStaffSchema = SchemaFactory.createForClass(GroupStaff);
