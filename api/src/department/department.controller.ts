import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Department } from '../enities/department.entity';
import { DepartmentService } from './department.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateDepartmentDTO } from './dto/create.department.dto';

@ApiTags('Department')
@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  //get all departments
  @Get()
  async findAll(): Promise<Department[]> {
    return this.departmentService.findAll();
  }
  //get all departments (Alt path for the test)
  @Get('GetAllDepartments')
  async getAllDepartments(): Promise<Department[]> {
    return this.departmentService.findAll();
  }

  //get department by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Department> {
    const department = await this.departmentService.findOne(id);
    if (!department) {
      throw new NotFoundException('department does not exist!');
    } else {
      return department;
    }
  }

  //create department
  @Post()
  async create(@Body() department: CreateDepartmentDTO): Promise<Department> {
    return this.departmentService.create(department);
  }

  //update department
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() department: CreateDepartmentDTO,
  ): Promise<any> {
    return this.departmentService.update(id, department);
  }

  //delete department
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    //handle error if department does not exist
    const department = await this.departmentService.findOne(id);
    if (!department) {
      throw new NotFoundException('department does not exist!');
    }
    return this.departmentService.delete(id);
  }
}
