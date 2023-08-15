import { ApiProperty } from '@nestjs/swagger';
import { Department } from 'src/enities/department.entity';

export class CreateEmployeeDTO {
  @ApiProperty({
    example: 'John',
  })
  firstName: String;

  @ApiProperty({
    example: 'Trials',
  })
  lastName: String;

  @ApiProperty({
    example: '2023-07-07',
  })
  hireDate: Date;

  @ApiProperty({
    example: '5562984020964',
  })
  phone: String;

  @ApiProperty({
    example: 'X Street,...',
  })
  address: String;

  @ApiProperty({
    description:
      'The employee department, can be only ID or the object with the ID  ',
    type: Department,
    example: 1,
  })
  department?: Department;
}
