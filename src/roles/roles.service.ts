import { Injectable } from '@nestjs/common';
import { CreateRolesDto } from './dto/create-roles.dto';
import { UpdateRolesDto } from './dto/update-roles.dto';
import { Roles, RolesDocument } from './schemas/roles.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Roles.name)
    private orderModel: Model<RolesDocument>,
  ) {}

  async create(createRolesDto: CreateRolesDto) {
    const res = await new this.orderModel(createRolesDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateRolesDto: UpdateRolesDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateRolesDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
