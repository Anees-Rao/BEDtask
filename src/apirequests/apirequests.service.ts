import { Injectable } from '@nestjs/common';
import { CreateApirequestDto } from './dto/create-apirequest.dto';
import { UpdateApirequestDto } from './dto/update-apirequest.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ApirequestsService {
  constructor(private prisma: PrismaService){}
  create(createApirequestDto: CreateApirequestDto, id:number) {
    return this.prisma.apirequests.create({
      data:{
        method: createApirequestDto.method,
        folder_id: id,
        url:createApirequestDto.url,
        body:createApirequestDto.body,
        request:createApirequestDto.request,
        response:createApirequestDto.response,
        query_params:createApirequestDto.query_params


      }
    });
  }

  findAll() {
    return this.prisma.apirequests.findMany();
  }

  findOne(id: number) {
     return this.prisma.apirequests.findMany({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateApirequestDto: UpdateApirequestDto) {
    return this.prisma.apirequests.update({
      where: {
        id: id,
      },
      data: {
        method: updateApirequestDto.method,
      },
    }); 
  }

  remove(id: number) {
    return this.prisma.apirequests.delete({
      where: {
        id: id,
      },
    }); 
  }
}
