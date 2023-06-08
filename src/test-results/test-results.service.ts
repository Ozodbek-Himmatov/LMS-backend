import { Injectable } from '@nestjs/common';
import { CreateTestResultsDto } from './dto/create-test-results.dto';
import { UpdateTestResultsDto } from './dto/update-test-results.dto';
import { TestResults, TestResultsDocument } from './schemas/test-results.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TestResultsService {
  constructor(
    @InjectModel(TestResults.name)
    private orderModel: Model<TestResultsDocument>,
  ) {}

  async create(createTestResultsDto: CreateTestResultsDto) {
    const res = await new this.orderModel(createTestResultsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateTestResultsDto: UpdateTestResultsDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateTestResultsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
