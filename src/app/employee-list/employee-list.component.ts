import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { EmployeeListService } from './employee-list.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  selectedFile: File = null;

  public text: string;
  text2: string = 'HelloText'
  message: string;

  constructor(private data: EmployeeListService, private _employeeService: EmployeeService, private router: Router) { }


  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    console.log('up', event.target.files[0]);
  }

  kod() {
    this._employeeService.Postdata(this.selectedFile).subscribe(data => {
      console.log('done');
      this.employees.push(data);
      this.text = this.employees[0].class;
      console.log('txt', this.text);
      //sent to service
      this.data.changeMessage(this.text);

      this.router.navigate(['/forecast']);
    })
  }

  newMessage() {
    console.log('txt2', this.text2);
    this.data.changeMessage(this.text2);
    this.router.navigate(['/forecast']);
  }


  go() {

  }

}

