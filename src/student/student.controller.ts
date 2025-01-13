import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './entities/student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // POST request to create a new student
  @Post()
  create(@Body() studentData: Partial<Student>): Promise<Student> {
    return this.studentService.create(studentData); 
  }

  // Get all students
  @Get()
  findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  // Get a single student by ID
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Student> {
    return this.studentService.findOne(id);
  }

  // Update an existing student
  @Put(':id')
  update(@Param('id') id: number, @Body() studentData: Partial<Student>): Promise<Student> {
    return this.studentService.update(id, studentData);
  }

  // Delete a student
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.studentService.remove(id);
  }

}
