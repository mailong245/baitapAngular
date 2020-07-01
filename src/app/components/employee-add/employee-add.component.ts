import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  frm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  });

  constructor(private service: EmployeesService) { }

  ngOnInit() { }

  submitEmployee(e) {
    e.preventDefault();

    let params = {
      title: this.frm.get('title').value,
      body: this.frm.get('body').value
    };

    this.service.postData(params).subscribe(response => {
      console.log(response);
    });

  }

}
