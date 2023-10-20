import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginUserDto, RegisterUserDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService  
  ){}

  async signup (dto: RegisterUserDto){
    try {
      const user = await this.userService.getUser(dto);
      if(user){
        throw new HttpException('User Already Exists', HttpStatus.CONFLICT)
      }else{
        const res = await this.userService.create(dto);
        return this.GenerateJwt(
          res.dataValues.id, 
          res.dataValues.name, 
          res.dataValues.email
        )
      }
    } catch (error) {
      throw new HttpException('Server Error: '+error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  async login(dto: LoginUserDto){
    const user = await this.validateLoginUser(dto);
    return this.GenerateJwt(user.id, user.name, user.email);
  }

  async GenerateJwt(id: number, name: string, email: string){
    const payload = {
      sub: id,
      username: name,
      useremail: email
    }
    return {
      accesstoken: await this.jwtService.signAsync(payload, {
        expiresIn: '1h',
        secret: process.env.JWT_SECRET_KEY
      })
    }
  }

  async validateLoginUser(dto: LoginUserDto){
    const user = await this.userService.findByEmail(dto.email);

    if(user && (await compare(dto.password, user.password))){
      const { password, ...result} = user.dataValues;
      return result;
    }

    throw new UnauthorizedException();
  }
}
