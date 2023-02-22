import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { identity } from 'rxjs';
import { ModuleRef } from '@nestjs/core';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { CreateProjectDto } from 'src/projects/dto/create-project.dto';
import { ProjectsService } from 'src/projects/projects.service';


@Injectable()
export class AuthService implements OnModuleInit  {
  private  usersService: UsersService
  
  constructor(
    private moduleRef: ModuleRef,
    
    
    private  jwtService: JwtService,
  ) {}
  onModuleInit() {
    this.usersService = this.moduleRef.get(UsersService, { strict: false })
  
   
  }
  
  async validateUser(email, password): Promise<any> {
    let user = await this.usersService.getEmail(email);
    if(user && user.password==password){
      return user;
  
    
    }
    return false
  }
  async login(user:any) {
    const payload= {
      email:user.email,
      password:user.password
    };
   return {access_token:this.jwtService.sign(payload),
  };
  
}
async signup (user:CreateUserDto){
  const newUser= await this.usersService.create(user);
  return this.login(newUser)
}

}


  
    
    
    
  

  // async login(user: any) {
  //   const payload = { username: user.username, sub: user.userId };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }




//   findAll() {
//     return `This action returns all auth`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} auth`;
//   }

//   update(id: number, updateAuthDto: UpdateAuthDto) {
//     return `This action updates a #${id} auth`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} auth`;
//   }
// }

  // async validateUser(email: string, pass: string): Promise<any> {
  //   const user = await this.usersService.findOne(email);
  //   if (user && user.password === pass) {
  //     const { password, ...result } = user;
  //     return result;
  //   }
  //   return null;
  // }

  // async login(user:any){
  //     const payload={
  //    email:user.email,
  //    sub:user.id
  //    }
  //    return
  //    {
  //     access_token: this.jwtService.sign(payload),
  //    }
     
  //    }