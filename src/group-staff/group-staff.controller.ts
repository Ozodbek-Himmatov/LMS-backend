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
import { GroupStaffService } from './group-staff.service';
import { CreateGroupStaffDto } from './dto/create-group-staff.dto';
import { UpdateGroupStaffDto } from './dto/update-group-staff.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { HttpCode } from '@nestjs/common';

@ApiTags('GroupStaff')
@Controller('groupStaff')
export class GroupStaffController {
  constructor(private readonly groupStaffService: GroupStaffService) {}

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Create groupStaff' })
  @Post()
  create(@Body() createGroupStaffDto: CreateGroupStaffDto) {
    return this.groupStaffService.create(createGroupStaffDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Find all groupStaff' })
  @Get()
  findAll(@Query() query: any) {
    return this.groupStaffService.findAll(query);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get one groupStaff' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupStaffService.findOne(id);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update groupStaff by id' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateGroupStaffDto: UpdateGroupStaffDto) {
    return this.groupStaffService.update(id, updateGroupStaffDto);
  }

  //  @UseGuards(JwtAuthGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete groupStaff by id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupStaffService.remove(id);
  }
}
