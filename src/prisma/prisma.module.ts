import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ProjectsService } from 'src/projects/projects.service';
import { FoldersService } from 'src/folders/folders.service';


@Module({
  providers: [PrismaService,ProjectsService,FoldersService,],
  exports: [PrismaService],
})
export class PrismaModule {}
