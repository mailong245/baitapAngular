import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeUpdateComponent } from './components/employee-update/employee-update.component';

const routes: Routes = [
  { path:'employees', component: EmployeeListComponent},
  { path:'employee/add', component: EmployeeAddComponent},
  { path:'employee/update/:id', component: EmployeeUpdateComponent },
  { path:'', component: EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
