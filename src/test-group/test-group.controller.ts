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
import { TestGroupService } from './test-group.service';
import { CreateTestGroupDto } from './dto/create-test-group.dto';
import { UpdateTestGroupDto } from './dto/update-test-group.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { HttpCode } from '@nestjs/common';

@ApiTags('TestGroup')
@Controller('testGroup')
export class TestGroupController {
  constructor(private readonly testGroupService: TestGroupService) {}

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Create testGroup' })
  @Post()
  create(@Body() createTestGroupDto: CreateTestGroupDto) {
    return this.testGroupService.create(createTestGroupDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all testGroup' })
  @Get()
  findAll(@Query() query: any) {
    return this.testGroupService.findAll(query);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one testGroup' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testGroupService.findOne(id);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update testGroup by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateTestGroupDto: UpdateTestGroupDto) {
    return this.testGroupService.update(id, updateTestGroupDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete testGroup by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testGroupService.remove(id);
  }
}
