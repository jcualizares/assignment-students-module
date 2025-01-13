import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  // Create a new student
  async create(studentData: Partial<Student>): Promise<Student> {
    const student = this.studentRepository.create(studentData); // Create a new student entity
    return this.studentRepository.save(student); // Save the student to the database
  }

}
