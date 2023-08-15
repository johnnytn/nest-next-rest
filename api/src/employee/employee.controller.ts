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
import { EmployeeService } from './employee.service';
import { Employee } from '../enities/employee.entity';
import { CreateEmployeeDTO } from './dto/create.employee.dto';
import { FindEmployeeDTO } from './dto/find.employee.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Employee')
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  //get all employees
  @ApiOkResponse({
    description: 'Employee records',
    type: FindEmployeeDTO,
    isArray: true,
  })
  @Get()
  async findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }
  //get all employees (Alt path for the test)
  @ApiOkResponse({
    description: 'Employee records',
    type: FindEmployeeDTO,
    isArray: true,
  })
  @Get('GetAllEmployees')
  async getAllEmployees(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  //get employee by id
  @ApiOkResponse({
    description: 'Employee records',
    type: FindEmployeeDTO,
    isArray: false,
  })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Employee> {
    return this.doDindOne(id);
  }
  //get employee by id (Alt path for the test)
  @ApiOkResponse({
    description: 'Employee records',
    type: FindEmployeeDTO,
    isArray: false,
  })
  @Get('GetEmployeeById/:id')
  async getEmployeeById(@Param('id') id: number): Promise<Employee> {
    return this.doDindOne(id);
  }

  //create employee
  @Post()
  async create(@Body() employee: CreateEmployeeDTO): Promise<Employee> {
    return this.employeeService.create(employee);
  }

  //update employee
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() employee: CreateEmployeeDTO,
  ): Promise<any> {
    return this.employeeService.update(id, employee);
  }
  //update employee (Alt path for the test)
  @Put('UpdateEmployee/:id')
  async updateEmployee(
    @Param('id') id: number,
    @Body() employee: CreateEmployeeDTO,
  ): Promise<any> {
    return this.employeeService.update(id, employee);
  }

  //delete employee
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    return this.doDelete(id);
  }

  //delete employee (Alt path for the test)
  @Delete('DeleteEmployee/:id')
  async deleteEmployee(@Param('id') id: number): Promise<any> {
    return this.doDelete(id);
  }

  private async doDindOne(@Param('id') id: number): Promise<Employee> {
    const employee = await this.employeeService.findOne(id);
    if (!employee) {
      throw new NotFoundException('employee does not exist!');
    } else {
      return employee;
    }
  }

  private async doDelete(@Param('id') id: number): Promise<any> {
    //handle error if employee does not exist
    const employee = await this.employeeService.findOne(id);
    if (!employee) {
      throw new NotFoundException('employee does not exist!');
    }
    return this.employeeService.delete(id);
  }
}
