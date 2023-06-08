import { Injectable } from '@nestjs/common';
import { CreateTestGroupDto } from './dto/create-test-group.dto';
import { UpdateTestGroupDto } from './dto/update-test-group.dto';
import { TestGroup, TestGroupDocument } from './schemas/test-group.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TestGroupService {
  constructor(
    @InjectModel(TestGroup.name)
    private orderModel: Model<TestGroupDocument>,
  ) {}

  async create(createTestGroupDto: CreateTestGroupDto) {
    const res = await new this.orderModel(createTestGroupDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateTestGroupDto: UpdateTestGroupDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateTestGroupDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
