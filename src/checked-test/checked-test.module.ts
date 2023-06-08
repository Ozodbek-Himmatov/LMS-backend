import { Module } from '@nestjs/common';
import { CheckedTestService } from './checked-test.service';
import { CheckedTestController } from './checked-test.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CheckedTest, CheckedTestSchema } from './schemas/checked-test.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CheckedTest.name, schema: CheckedTestSchema }]),
    JwtModule,
  ],
  controllers: [CheckedTestController],
  providers: [CheckedTestService],
})
export class CheckedTestModule {}
