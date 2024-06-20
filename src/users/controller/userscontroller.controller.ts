import { Controller, Get, Logger } from "@nestjs/common";
import { UserEntity } from '../entity/users.entity';
import { UsersService } from '../service/users.service';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor(private readonly usersService: UsersService) {}

  @Get('all')
  async findAllUser(): Promise<any[]> {
    this.logger.log('Fetching all users');
    const users = await this.usersService.findAllUser();
    this.logger.log(`Found users: ${JSON.stringify(users)}`);
    return users;
  }
}
