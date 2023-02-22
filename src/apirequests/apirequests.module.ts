import { Module } from '@nestjs/common';
import { ApirequestsService } from './apirequests.service';
import { ApirequestsController } from './apirequests.controller';
import { PrismaService } from 'src/prisma/prisma.service';


@Module({
  controllers: [ApirequestsController],
  providers: [ApirequestsService,PrismaService]
 
})
export class ApirequestsModule {}
