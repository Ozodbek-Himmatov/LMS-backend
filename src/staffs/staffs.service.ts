import { Injectable } from '@nestjs/common';
import { CreateStaffsDto } from './dto/create-staffs.dto';
import { UpdateStaffsDto } from './dto/update-staffs.dto';
import { Staffs, StaffsDocument } from './schemas/staffs.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StaffsService {
  constructor(
    @InjectModel(Staffs.name)
    private orderModel: Model<StaffsDocument>,
  ) {}

  async create(createStaffsDto: CreateStaffsDto) {
    const res = await new this.orderModel(createStaffsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateStaffsDto: UpdateStaffsDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateStaffsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
