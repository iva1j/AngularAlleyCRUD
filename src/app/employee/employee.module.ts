import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { EmployeeRoutingModule } from "./employee-routing.module";

import { CreateEmployeeComponent } from "./create-employee.component";
import { ListEmployeesComponent } from "./list-employees.component";
import { format } from "url";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CreateEmployeeComponent, ListEmployeesComponent],
  imports: [CommonModule, ReactiveFormsModule, EmployeeRoutingModule, SharedModule]
})
export class EmployeeModule {}
