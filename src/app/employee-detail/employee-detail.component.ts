import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { EmployeeListService } from '../employee-list/employee-list.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.sass']
})
export class EmployeeDetailComponent implements OnInit {
  public employees = [];

  public text: string;

  constructor(private data: EmployeeListService,private http: HttpClient, private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(text => this.text = text)

    // this.employeeService.getEmployess()
    // .subscribe(data => {
    //   this.employees.push(data);
    //   console.log('dta', data);
    // });

    // console.log('dta2', this.employees);
  }



}
