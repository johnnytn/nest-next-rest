import { Injectable } from '@nestjs/common';
import { Department } from '../enities/department.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}

  async findAll(): Promise<Department[]> {
    return this.departmentRepository.find();
  }

  async findOne(id: number): Promise<Department> {
    return this.departmentRepository.findOne({ where: { id } });
  }

  async create(entity: Partial<Department>): Promise<Department> {
    const newEntity = this.departmentRepository.create(entity);
    return this.departmentRepository.save(newEntity);
  }

  async update(id: number, entity: Partial<Department>): Promise<Department> {
    await this.departmentRepository.update(id, entity);
    return this.departmentRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.departmentRepository.delete(id);
  }
}
