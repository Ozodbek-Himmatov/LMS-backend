import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type GroupsDocument = HydratedDocument<Groups>;

@Schema({ timestamps: true })
export class Groups {
  @Prop()
	name:string;

	@Prop()
	description:string;

	@Prop()
	start_year:string;

	;
}

export const GroupsSchema = SchemaFactory.createForClass(Groups);
