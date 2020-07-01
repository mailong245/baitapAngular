import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  show: boolean = false;
  employees: Object;

  constructor(private service: EmployeesService) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.service.getAllEmployees().subscribe(data => {
      this.employees = data;
      this.show = true;
    });
  }

  deleteEmployee(id: Number) {
    this.service.deleteEmployees(id).subscribe(data => {
      console.log(data);
    });
  }
}
