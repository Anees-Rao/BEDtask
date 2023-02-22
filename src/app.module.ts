import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';


import { ProjectsModule } from './projects/projects.module';
import { FoldersModule } from './folders/folders.module';
import { ApirequestsModule } from './apirequests/apirequests.module';
import { AuthModule } from './auth/auth.module';
// import { AuthModule } from './auth/auth.module';


@Module({
  imports: [UsersModule, PrismaModule, ProjectsModule, FoldersModule, ApirequestsModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
