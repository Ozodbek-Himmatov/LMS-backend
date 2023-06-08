import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type RolesDocument = HydratedDocument<Roles>;

@Schema({ timestamps: true })
export class Roles {
  @Prop()
	name:string;

	;
}

export const RolesSchema = SchemaFactory.createForClass(Roles);
