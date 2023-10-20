import { ConflictException, HttpException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from './dto/user.dto';
import { hash, compare } from 'bcrypt';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'models/user/User.model';
import { User_Search } from 'models/user/UserSearch.model';
import { SearchItemDto } from './dto/searchItem.dto';


@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)  private userModel: typeof User,
    @InjectModel(User_Search) private userSearch: typeof User_Search
  ){}

  async create (dto: CreateUserDto){
    const newUser = await this.userModel.create({
        name: dto.name,
        email: dto.email,
        password: await hash(dto.password, 10),
        contact: dto.contact
    });
    const { password, ...result } = newUser;
    return result;
  }

  async getUser(dto: LoginUserDto){
    const user = await this.userModel.findOne({
      where: {
        email: dto.email
      }
    });
    return user;
  }

  async findByEmail(email){
    const user = await this.userModel.findOne({
      where: {
        email:  email
      }
    });
    return user;
  }

  async findById(id: number){
    const user = await this.userModel.findOne({
      where: {
        id:  id
      }
    });
    return user;
  }

  async addSearchItem(dto: SearchItemDto, id: number){
    try {
      return await this.userSearch.create({
        searchItem: dto.searchItem,
        userId: id
      })
    } catch (error) {
      return { 
        msg: `Error: + ${error}`,
        status: 401
      }
    }
  }
}
