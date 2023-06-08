import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type StaffsDocument = HydratedDocument<Staffs>;

@Schema({ timestamps: true })
export class Staffs {
  @Prop()
	full_name:string;

	@Prop()
	image:string;

	@Prop()
	phone:string;

	@Prop()
	login:string;

	@Prop()
	password:string;

	@Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Role'  }])
	role_id:mongoose.Schema.Types.ObjectId;

	@Prop()
	email:string;

	@Prop()
	tg_name:string;

	@Prop()
	token:string;

	;
}

export const StaffsSchema = SchemaFactory.createForClass(Staffs);
