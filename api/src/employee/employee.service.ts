import { Injectable, Logger } from '@nestjs/common';
import { Employee } from '../enities/employee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDTO } from './dto/create.employee.dto';

@Injectable()
export class EmployeeService {
  private logger = new Logger(EmployeeService.name);
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find({
      relations: {
        department: true,
      },
    });
  }

  async findOne(id: number): Promise<Employee> {
    return this.employeeRepository.findOne({
      where: { id },
      relations: {
        department: true,
      },
    });
  }

  async create(employee: Partial<Employee>): Promise<Employee> {
    const newEmployee = this.employeeRepository.create(employee);
    return this.employeeRepository.save(newEmployee);
  }

  async update(id: number, employee: Partial<Employee>): Promise<Employee> {
    await this.employeeRepository.update(id, employee);
    return this.employeeRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}
