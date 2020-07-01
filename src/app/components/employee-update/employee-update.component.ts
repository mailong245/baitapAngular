import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employees } from 'src/app/models/Employees';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  employeeId: Number = 0;

  employee: Employees;

  frm = new FormGroup({
    employee_name: new FormControl(''),
    employee_salary: new FormControl(''),
    employee_age: new FormControl(''),
  });



  constructor(private service: EmployeesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.employeeId = parseInt(params.get('id'));
      this.service.getEmployeeById(this.employeeId).subscribe(
        data => {
          this.employee = data;

          this.frm = new FormGroup({
            employee_name: new FormControl(this.employee.employee_name),
            employee_salary: new FormControl(this.employee.employee_salary),
            employee_age: new FormControl(this.employee.employee_age),
          });

        }
      )
    });
  }

  updateEmployees(e) {
    e.preventDefault();
    let params = {
      employee_name: this.employee_name().value,
      employee_salary: this.employee_salary().value,
      employee_age: this.employee_age().value
    };

    console.log(params.employee_name);
    console.log(params.employee_salary);
    console.log(params.employee_age);


    this.service.updateEmployees(this.employeeId, params).subscribe(response => {
      console.log(response);
      this.router.navigate(['']);
    });
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
