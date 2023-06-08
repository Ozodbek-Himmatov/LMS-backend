import { Injectable } from '@nestjs/common';
import { CreateGroupsDto } from './dto/create-groups.dto';
import { UpdateGroupsDto } from './dto/update-groups.dto';
import { Groups, GroupsDocument } from './schemas/groups.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class GroupsService {
  constructor(
    @InjectModel(Groups.name)
    private orderModel: Model<GroupsDocument>,
  ) {}

  async create(createGroupsDto: CreateGroupsDto) {
    const res = await new this.orderModel(createGroupsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateGroupsDto: UpdateGroupsDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateGroupsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
