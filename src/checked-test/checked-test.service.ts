import { Injectable } from '@nestjs/common';
import { CreateCheckedTestDto } from './dto/create-checked-test.dto';
import { UpdateCheckedTestDto } from './dto/update-checked-test.dto';
import { CheckedTest, CheckedTestDocument } from './schemas/checked-test.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CheckedTestService {
  constructor(
    @InjectModel(CheckedTest.name)
    private orderModel: Model<CheckedTestDocument>,
  ) {}

  async create(createCheckedTestDto: CreateCheckedTestDto) {
    const res = await new this.orderModel(createCheckedTestDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateCheckedTestDto: UpdateCheckedTestDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateCheckedTestDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
