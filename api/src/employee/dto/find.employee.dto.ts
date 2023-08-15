import { ApiProperty } from '@nestjs/swagger';
import { Department } from 'src/enities/department.entity';

export class FindEmployeeDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  firstName: String;

  @ApiProperty()
  lastName: String;

  @ApiProperty()
  hireDate: Date;

  @ApiProperty()
  phone: String;

  @ApiProperty()
  address: String;

  @ApiProperty()
  department?: Department;
}
