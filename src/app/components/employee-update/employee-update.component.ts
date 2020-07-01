import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  frm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  });
  employeeId: Number = 0;
  constructor(private service: EmployeesService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.employeeId = parseInt(params.get('id'));
    });
  }
  
  updateEmployees(e) {
    e.preventDefault();
    let params = {
      title: this.frm.get('title').value,
      body: this.frm.get('body').value
    };
    this.service.updateEmployees(this.employeeId, params).subscribe(response => {
      console.log(response);
    });
  }

}
