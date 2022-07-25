import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employ';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employe : Employee[] = []

  constructor(private empService : EmployeeService) { }

  ngOnInit(): void {
    this.empService
        .getEmployees()
        .subscribe((emp) => (
          this.employe = emp
        ))
  }

  addEmploy(employ: Employee){
    this.empService
        .addEmploy(employ)
        .subscribe((emp) => (
          this.employe.push(emp)
        ))
  }

  deleteEmp(employ: Employee){
    this.empService.deleteEmployee(employ)
        .subscribe(() => (
          this.employe = this.employe.filter(e => e.id !== employ.id)
        ))
  }
}