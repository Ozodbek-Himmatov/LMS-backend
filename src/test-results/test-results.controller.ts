import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { TestResultsService } from './test-results.service';
import { CreateTestResultsDto } from './dto/create-test-results.dto';
import { UpdateTestResultsDto } from './dto/update-test-results.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { HttpCode } from '@nestjs/common';

@ApiTags('TestResults')
@Controller('testResults')
export class TestResultsController {
  constructor(private readonly testResultsService: TestResultsService) {}

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Create testResults' })
  @Post()
  create(@Body() createTestResultsDto: CreateTestResultsDto) {
    return this.testResultsService.create(createTestResultsDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all testResults' })
  @Get()
  findAll(@Query() query: any) {
    return this.testResultsService.findAll(query);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one testResults' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testResultsService.findOne(id);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update testResults by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateTestResultsDto: UpdateTestResultsDto) {
    return this.testResultsService.update(id, updateTestResultsDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete testResults by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testResultsService.remove(id);
  }
}
