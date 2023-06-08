import { Injectable } from '@nestjs/common';
import { CreateQuestionsDto } from './dto/create-questions.dto';
import { UpdateQuestionsDto } from './dto/update-questions.dto';
import { Questions, QuestionsDocument } from './schemas/questions.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Questions.name)
    private orderModel: Model<QuestionsDocument>,
  ) {}

  async create(createQuestionsDto: CreateQuestionsDto) {
    const res = await new this.orderModel(createQuestionsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateQuestionsDto: UpdateQuestionsDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateQuestionsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
