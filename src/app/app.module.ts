import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmployeeService } from "./employee/employee.service";
import { HomeComponent } from "./home.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { EmployeeModule } from "./employee/employee.module";

@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent],
  imports: [BrowserModule, EmployeeModule, AppRoutingModule, HttpClientModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
