import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Department } from './department.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: String;

  @Column()
  lastName: String;

  // Precision set to 3 to ensure stored precision in postgres matches with javascript
  @Column({ type: 'timestamptz', precision: 3, nullable: true })
  hireDate: Date;

  @Column()
  phone: String;

  @Column()
  address: String;

  // the employee only has one department
  @ManyToOne(() => Department, (department) => department.employees)
  department: Department;
}
