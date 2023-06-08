import { Injectable } from '@nestjs/common';
import { CreateSubjectsDto } from './dto/create-subjects.dto';
import { UpdateSubjectsDto } from './dto/update-subjects.dto';
import { Subjects, SubjectsDocument } from './schemas/subjects.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectModel(Subjects.name)
    private orderModel: Model<SubjectsDocument>,
  ) {}

  async create(createSubjectsDto: CreateSubjectsDto) {
    const res = await new this.orderModel(createSubjectsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateSubjectsDto: UpdateSubjectsDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateSubjectsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
