import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../employ';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = 'http://localhost:4260/employee'

  constructor(private http : HttpClient) { }

  getEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url)
  }

  addEmploy(employ: Employee): Observable<Employee>{
    return this.http.post<Employee>(this.url, employ, httpOptions)
  }

  deleteEmployee(emp: Employee): Observable<Employee>{
    const api = `${this.url}/${emp.id}`
    return this.http.delete<Employee>(api)
  }

}
