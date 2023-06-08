import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type SubjectsDocument = HydratedDocument<Subjects>;

@Schema({ timestamps: true })
export class Subjects {
  @Prop()
	name:string;

	;
}

export const SubjectsSchema = SchemaFactory.createForClass(Subjects);
