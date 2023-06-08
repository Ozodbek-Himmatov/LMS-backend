import { Injectable } from '@nestjs/common';
import { CreateAnswersDto } from './dto/create-answers.dto';
import { UpdateAnswersDto } from './dto/update-answers.dto';
import { Answers, AnswersDocument } from './schemas/answers.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AnswersService {
  constructor(
    @InjectModel(Answers.name)
    private orderModel: Model<AnswersDocument>,
  ) {}

  async create(createAnswersDto: CreateAnswersDto) {
    const res = await new this.orderModel(createAnswersDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateAnswersDto: UpdateAnswersDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateAnswersDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
