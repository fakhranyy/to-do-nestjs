import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LazyModuleLoader } from '@nestjs/core'
import { UsersModule } from './users.module';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';


@Controller('users')
@ApiTags('Users api')
export class UsersController {
  constructor(private lazyModuleLoader: LazyModuleLoader){}

  @Post()
  // async create(@Body() createUserDto: CreateUserDto) {
  async create(@Body() user : CreateUserDto):Promise<User> {
    const moduleRef = await this.lazyModuleLoader.load(() => UsersModule);
    const service = moduleRef.get(UsersService);
    // return service.create(createUserDto);
    return await service.createUser(user);
  }

  @Get(':id')
  async usersTasks(id: number){
    const moduleRef = await this.lazyModuleLoader.load(() => UsersModule);
    const service = moduleRef.get(UsersService);
    return service.getUserTasks(id);
  }

  @Get()
  async findAll() {
    const moduleRef = await this.lazyModuleLoader.load(() => UsersModule);
    const service = moduleRef.get(UsersService);
    return service.findAll();
  }

  @Get(':username')
  async findOne(@Param('username') username: string) {
    const moduleRef = await this.lazyModuleLoader.load(() => UsersModule);
    const service = moduleRef.get(UsersService);
    return service.findOne(username);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    // return this.usersService.update(+id, updateUserDto);
    const moduleRef = await this.lazyModuleLoader.load(() => UsersModule);
    const service = moduleRef.get(UsersService);
    return service.update(id , updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    // return this.usersService.remove(+id);
    const moduleRef = await this.lazyModuleLoader.load(() => UsersModule);
    const service = moduleRef.get(UsersService);
    service.remove(id);
  }
}
