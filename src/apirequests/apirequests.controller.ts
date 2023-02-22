import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApirequestsService } from './apirequests.service';
import { CreateApirequestDto } from './dto/create-apirequest.dto';
import { UpdateApirequestDto } from './dto/update-apirequest.dto';

@Controller('apirequests')
export class ApirequestsController {
  constructor(private readonly apirequestsService: ApirequestsService) {}

  @Post('data/:id')
  create(@Body() createApirequestDto: CreateApirequestDto,
  @Param('id') id: number,
  ) 
       {
    return this.apirequestsService.create(createApirequestDto, +id);
  }

  @Get('getalldata')
  findAll() {
    return this.apirequestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apirequestsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApirequestDto: UpdateApirequestDto) {
    return this.apirequestsService.update(+id, updateApirequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apirequestsService.remove(+id);
  }
}
