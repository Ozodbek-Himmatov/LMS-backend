import { Module } from '@nestjs/common';
import { TestResultsService } from './test-results.service';
import { TestResultsController } from './test-results.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TestResults, TestResultsSchema } from './schemas/test-results.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TestResults.name, schema: TestResultsSchema }]),
    JwtModule,
  ],
  controllers: [TestResultsController],
  providers: [TestResultsService],
})
export class TestResultsModule {}
