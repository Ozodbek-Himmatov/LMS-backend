import { Module } from '@nestjs/common';
import { StaffsService } from './staffs.service';
import { StaffsController } from './staffs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Staffs, StaffsSchema } from './schemas/staffs.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Staffs.name, schema: StaffsSchema }]),
    JwtModule,
  ],
  controllers: [StaffsController],
  providers: [StaffsService],
})
export class StaffsModule {}
