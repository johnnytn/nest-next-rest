import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentService } from './department.service';
import { Department } from '../enities/department.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MockRepository } from '../utils/typeorm/mockRepository';

describe('DepartmentService', () => {
  let service: DepartmentService;
  // Create a mock repository
  let departmentRepo: MockRepository<Department>;

  beforeEach(async () => {
    departmentRepo = new MockRepository<Department>();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DepartmentService,
        {
          provide: getRepositoryToken(Department),
          useValue: departmentRepo,
        },
      ],
    }).compile();
    service = module.get<DepartmentService>(DepartmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
