import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(text: string) {
    this.messageSource.next(text)
    console.log('list service',text)
  }

}
