import { Injectable } from '@nestjs/common';
import { error } from 'console';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  [x: string]: any;
  private users: User[] = [];

  create(createUserDto: CreateUserDto) {
    const currentMaxId = this.users[this.users.length - 1]?.id || 0;

    const id = currentMaxId + 1;
    const user = {
      id,
      ...createUserDto,
    };
    this.users.push(user);

    if (user.password.length < 6) {
      const erro = 'Erro, usuário não pode ser menos que 6';
      return erro;
    } else {
      return user;
    }
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    return this.users[index];
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);
    const index = this.users.findIndex((user) => user.id === id);

    const newUser = {
      ...user,
      ...updateUserDto,
    };

    this.user[index] = newUser;
    return newUser;
  }

  remove(id: number) {
    const delet = 'Usuário deletado';
    const index = this.users.findIndex((user) => user.id === id);

    this.users.splice(index, 1);
    return delet;
  }
}
