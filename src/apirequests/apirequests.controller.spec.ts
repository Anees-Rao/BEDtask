import { Test, TestingModule } from '@nestjs/testing';
import { ApirequestsController } from './apirequests.controller';
import { ApirequestsService } from './apirequests.service';

describe('ApirequestsController', () => {
  let controller: ApirequestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApirequestsController],
      providers: [ApirequestsService],
    }).compile();

    controller = module.get<ApirequestsController>(ApirequestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
