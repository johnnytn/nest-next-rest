import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Employee } from './employee.entity';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: String;

  // A department can have many employees (1 - N)
  @OneToMany(() => Employee, (employee) => employee.department, {
    cascade: false,
  })
  employees: Employee[];
}
