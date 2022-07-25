import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/employ';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  id : number = 0
  name: string = ''
  email: string = ''
  phone_no : number = 0
  profession: string =''
  project: boolean = false

  @Output() addEmployee: EventEmitter<Employee> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.name){
      alert('Add Name of the employee')
      return
    }

    const newEmploy = {
      id : this.id,
      name : this.name,
      email : this.email,
      phone_no : this.phone_no,
      profession : this.profession,
      project : this.project
    }

    this.addEmployee.emit(newEmploy)

    this.id = 0
    this.name = ''
    this.email = ''
    this.phone_no = 0
    this.profession = ''
    this.project = false

  }

}
