import { Injectable } from '@nestjs/common';
import { CreateGroupStaffDto } from './dto/create-group-staff.dto';
import { UpdateGroupStaffDto } from './dto/update-group-staff.dto';
import { GroupStaff, GroupStaffDocument } from './schemas/group-staff.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class GroupStaffService {
  constructor(
    @InjectModel(GroupStaff.name)
    private orderModel: Model<GroupStaffDocument>,
  ) {}

  async create(createGroupStaffDto: CreateGroupStaffDto) {
    const res = await new this.orderModel(createGroupStaffDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateGroupStaffDto: UpdateGroupStaffDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateGroupStaffDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
