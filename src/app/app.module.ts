import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartementComponent } from './departement/departement.component';
import { AddEditDepartementComponent } from './departement/add-edit-departement/add-edit-departement.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEditEmployeeComponent } from './employee/add-edit-employee/add-edit-employee.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShowDepartmentComponent } from './departement/show-department/show-department.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartementComponent,
    AddEditDepartementComponent,
    EmployeeComponent,
    AddEditEmployeeComponent,
    ShowEmployeeComponent,
    ShowDepartmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
