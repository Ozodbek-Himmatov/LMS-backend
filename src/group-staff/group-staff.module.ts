import { Module } from '@nestjs/common';
import { GroupStaffService } from './group-staff.service';
import { GroupStaffController } from './group-staff.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupStaff, GroupStaffSchema } from './schemas/group-staff.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: GroupStaff.name, schema: GroupStaffSchema }]),
    JwtModule,
  ],
  controllers: [GroupStaffController],
  providers: [GroupStaffService],
})
export class GroupStaffModule {}
