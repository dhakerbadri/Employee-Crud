import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  readonly apiUrl = 'http://localhost:50306/api/';
  readonly photoUrl = 'http://localhost:50306/Photos/';

  constructor(private http: HttpClient) {}

  //Departement
  getDepartementList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'departement/GetDepartement');
  }

  addDepartment(dept: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post<any>(
      this.apiUrl + 'departement/AddDepartment',
      dept,
      httpOptions
    );
  }

  updateDepartment(dept: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<any>(
      this.apiUrl + 'departement/UpdateDepartment/',
      dept,
      httpOptions
    );
  }

  deleteDepartment(deptId: number): Observable<number> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.delete<number>(
      this.apiUrl + 'departement/DeleteDepartment/' + deptId,
      httpOptions
    );
  }

  // Employee
  getEmployeeList(): Observable<any[]> {
    console.log(this.apiUrl);

    return this.http.get<any[]>(this.apiUrl + 'employee/GetEmployee');
  }

  addEmployee(emp: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    console.log('This is the add method =>' + this.http.post);
    return this.http.post<any>(
      this.apiUrl + 'employee/AddEmployee',
      emp,
      httpOptions
    );
  }

  updateEmployee(emp: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put<any>(
      this.apiUrl + 'employee/UpdateEmployee/',
      emp,
      httpOptions
    );
  }

  deleteEmployee(empId: number): Observable<number> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.delete<number>(
      this.apiUrl + 'employee/DeleteEmployee/' + empId,
      httpOptions
    );
  }

  uploadPhoto(photo: any) {
    return this.http.post(this.apiUrl + 'employee/savefile', photo);
  }

  getAllDepartmentNames(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'employee/GetAllDepartmentNames');
  }
}
