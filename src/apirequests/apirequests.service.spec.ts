import { Test, TestingModule } from '@nestjs/testing';
import { ApirequestsService } from './apirequests.service';

describe('ApirequestsService', () => {
  let service: ApirequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApirequestsService],
    }).compile();

    service = module.get<ApirequestsService>(ApirequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
