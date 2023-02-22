import { Injectable } from '@nestjs/common';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FoldersService {
  constructor(private prisma: PrismaService){}
  create(createFolderDto: CreateFolderDto, id: number) {
    return this.prisma.folders.create({
      data:{
        name: createFolderDto.name,
        project_id: id,
      }
    });
  }

  findAll() {
    return this.prisma.folders.findMany();
  }

  findOne(id: number) {
    return this.prisma.folders.findMany({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateFolderDto: UpdateFolderDto) {
     return this.prisma.folders.update({
      where: {
        id: id,
      },
      data: {
        name: updateFolderDto.name,
      },
    });
  }

  remove(id: number) {
    return this.prisma.folders.delete({
      where: {
        id: id,
      },
    });
  }
}
