import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}


  findAll() {
    return this.prisma.users.findMany({
      include:{
        projects:{
          include:{
            folders:{
              include:{
                apirequests:{}
              }
            }
          }
        }
      }
    });
  }
  getEmail(email:string){
    return this.prisma.users.findUnique({
      where: {
        email,
      },
    });
  }

  create(createUserDto: CreateUserDto) {
    return this.prisma.users.create({
      data: createUserDto,
    });
  }

  

}




  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }

