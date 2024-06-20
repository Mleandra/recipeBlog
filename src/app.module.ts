import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { RecipesModule } from './recipes/recipes.module';
import { UserEntity } from './users/entity/users.entity';
import { Recipe } from './recipes/entity/recipes.entity';

@Module({
  controllers: [AppController],
  imports: [
    ConfigModule.forRoot({}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: 'localhost',
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: 'appblog',
        entities: [UserEntity, Recipe],
        synchronize: true, // use True in production  only
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    RecipesModule,
  ],

  providers: [AppService],
})
export class AppModule {}
