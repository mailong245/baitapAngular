import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  frm = new FormGroup({
    employee_name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    employee_salary: new FormControl('', [
      Validators.required
    ]),
    employee_age: new FormControl('', [
      Validators.required, Validators.minLength(3)
    ]),
    profile_image: new FormControl('')

  });

  constructor(private service: EmployeesService, private router: Router) { }

  ngOnInit() { }

  submitEmployee(e) {
    e.preventDefault();

    let params = {
      id: Math.floor((Math.random() * 1000) + 1),
      employee_name: this.frm.get('employee_name').value,
      employee_salary: this.frm.get('employee_salary').value,
      employee_age: this.frm.get('employee_age').value,
      profile_image: this.frm.get('profile_image').value
    };

    this.service.postData(params).subscribe(response => {
      console.log(response);
      this.router.navigate(['employees']);
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

  profile_image() {
    return this.frm.get("profile_image");
  }

}
