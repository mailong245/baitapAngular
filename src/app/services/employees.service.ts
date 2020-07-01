import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employees } from '../models/Employees';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  JSON_URL = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employees> {
    return this.http.get<Employees>(this.JSON_URL);
  }

  postData(params: any): Observable<Employees> {
    return this.http.post<Employees>(this.JSON_URL, { params });
  }

  updateEmployees(id: Number, params: Object = {}): Observable<Employees> {
    let url = `${this.JSON_URL}/${id}`;
    console.log(url);
    return this.http.put<Employees>(url, { params });
  }

  deleteEmployees(id: Number) {
    let url = `${this.JSON_URL}/${id}`;
    return this.http.delete(url);
  }

  findEmployeeByName(name: String): Observable<Employees> {
    console.log(name);
    let url = `${this.JSON_URL}?employee_name=${name}`;
    return this.http.get<Employees>(url);
  }

  findEmployeeBySalary(salary: any): Observable<Employees> {
    console.log(salary);
    let url = `${this.JSON_URL}?employee_salary=${salary}`;
    return this.http.get<Employees>(url);
  }

  findEmployeeByAge(age: any): Observable<Employees> {
    console.log(age);
    let url = `${this.JSON_URL}?employee_age=${age}`;
    return this.http.get<Employees>(url);
  }

}
