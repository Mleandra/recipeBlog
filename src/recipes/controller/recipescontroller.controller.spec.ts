import { Test, TestingModule } from '@nestjs/testing';
import { RecipescontrollerController } from './recipescontroller.controller';

describe('ControllerController', () => {
  let controller: RecipescontrollerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipescontrollerController],
    }).compile();

    controller = module.get<RecipescontrollerController>(RecipescontrollerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
