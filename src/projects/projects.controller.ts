import { Controller, Get, Post, Body, Patch, Param, Delete ,UseGuards} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guards';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}
  @UseGuards(JwtAuthGuard)
  @Post('users/:id')
  create(@Body() createProjectDto: CreateProjectDto,
  @Param('id') id: number,
  ) {
      return this.projectsService.create(createProjectDto,+id);
  }

  @Get('getAll')
  findAll() {
    return this.projectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.projectsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, 
  @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(+id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(+id);
  }
}
