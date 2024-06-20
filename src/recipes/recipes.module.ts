import { Module } from '@nestjs/common';
import { RecipescontrollerController } from './controller/recipescontroller.controller';
import { RecipesService } from './service/recipes.service';

@Module({
  controllers: [RecipescontrollerController],
  providers: [RecipesService]
})
export class RecipesModule {}
