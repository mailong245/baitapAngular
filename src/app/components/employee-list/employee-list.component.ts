import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  show: boolean = false;
  employees: Object;
  filteredItems: any;

  frm = new FormGroup({
    employee_name: new FormControl(''),
    employee_salary: new FormControl(''),
    employee_age: new FormControl(''),
  });

  constructor(private service: EmployeesService) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.service.getAllEmployees().subscribe(data => {
      this.employees = data;
      this.show = true;
      this.assignCopy();
    });
  }

  findEmployee() {

    if (this.employee_name().value != null && "" != this.employee_name().value) {
      this.service.findEmployeeByName(this.employee_name().value).subscribe(data => {
        console.log("return data: " + data)
        this.employees = data;
        this.show = true;
      });
    }
    else if (this.employee_salary().value != null && "" != this.employee_salary().value) {
      this.service.findEmployeeBySalary(this.employee_salary().value).subscribe(data => {
        console.log("return data: " + data)
        this.employees = data;
        this.show = true;
      });
    }
    else if (this.employee_age().value != null && "" != this.employee_age().value) {
      this.service.findEmployeeByAge(this.employee_age().value).subscribe(data => {
        console.log("return data: " + data)
        this.employees = data;
        this.show = true;
      });
    }
    else {
      this.getAllEmployees();
    }
  }

  deleteEmployee(id: Number) {
    this.service.deleteEmployees(id).subscribe(data => {
      console.log(data);
      this.getAllEmployees();
    });
  }

  assignCopy() {
    this.filteredItems = Object.assign([], this.employees);
  }

  filterName(value) {
    console.log(value);
    if (!value) {
      // when nothing has typed
      this.assignCopy();
    }
    this.filteredItems = Object.assign([], this.employees).filter(
      item => item.employee_name.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
  }

  filterSalary(value) {
    console.log(value);
    if (!value) {
      // when nothing has typed
      this.assignCopy();
    }
    this.filteredItems = Object.assign([], this.employees).filter(
      item => item.employee_salary.indexOf(value) > -1
    )
  }

  filterAge(value) {
    console.log(value);
    if (!value) {
      // when nothing has typed
      this.assignCopy();
    }
    this.filteredItems = Object.assign([], this.employees).filter(
      item => item.employee_age.indexOf(value) > -1
    )
  }

  employee_name() {
    return this.frm.get("employee_name");
  }

  employee_salary() {
    return this.frm.get("employee_salary");
  }

  employee_age() {
    return this.frm.get("employee_age");
  }

}
