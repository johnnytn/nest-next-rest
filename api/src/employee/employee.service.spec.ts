import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeService } from './employee.service';
import { Employee } from '../enities/employee.entity';
import { MockRepository } from '../utils/typeorm/mockRepository';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('EmployeeService', () => {
  let service: EmployeeService;
  // Create a mock repository
  let employeeRepo: MockRepository<Employee>;

  beforeEach(async () => {
    employeeRepo = new MockRepository<Employee>();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeeService,
        {
          provide: getRepositoryToken(Employee),
          useValue: employeeRepo,
        },
      ],
    }).compile();

    service = module.get<EmployeeService>(EmployeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
