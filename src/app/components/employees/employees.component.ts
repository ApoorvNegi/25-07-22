import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/employ';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  faTimes = faTimes
  @Input() employees ?: Employee

  @Output() deleteEmploy: EventEmitter<Employee> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  deleteEmp(emp: Employee){
    this.deleteEmploy.emit(emp)
  }

}
