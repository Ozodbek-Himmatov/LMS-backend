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
import { CheckedTestService } from './checked-test.service';
import { CreateCheckedTestDto } from './dto/create-checked-test.dto';
import { UpdateCheckedTestDto } from './dto/update-checked-test.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { HttpCode } from '@nestjs/common';

@ApiTags('CheckedTest')
@Controller('checkedTest')
export class CheckedTestController {
  constructor(private readonly checkedTestService: CheckedTestService) {}

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Create checkedTest' })
  @Post()
  create(@Body() createCheckedTestDto: CreateCheckedTestDto) {
    return this.checkedTestService.create(createCheckedTestDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all checkedTest' })
  @Get()
  findAll(@Query() query: any) {
    return this.checkedTestService.findAll(query);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one checkedTest' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkedTestService.findOne(id);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update checkedTest by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCheckedTestDto: UpdateCheckedTestDto) {
    return this.checkedTestService.update(id, updateCheckedTestDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete checkedTest by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkedTestService.remove(id);
  }
}
