import { Injectable } from '@nestjs/common';
import { CreateSubjectStaffDto } from './dto/create-subject-staff.dto';
import { UpdateSubjectStaffDto } from './dto/update-subject-staff.dto';
import { SubjectStaff, SubjectStaffDocument } from './schemas/subject-staff.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SubjectStaffService {
  constructor(
    @InjectModel(SubjectStaff.name)
    private orderModel: Model<SubjectStaffDocument>,
  ) {}

  async create(createSubjectStaffDto: CreateSubjectStaffDto) {
    const res = await new this.orderModel(createSubjectStaffDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateSubjectStaffDto: UpdateSubjectStaffDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateSubjectStaffDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
