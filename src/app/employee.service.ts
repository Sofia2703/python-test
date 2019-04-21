import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "http://127.0.0.1:5000/forecast";

  // private _url: string = "http://127.0.0.1:5003/forecast";

  constructor(private http: HttpClient) { }

  getEmployess(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }

  Postdata(fileUp: File) {
    const endpoint = this._url;
    const fuckCode: FormData = new FormData();
    fuckCode.append('pic', fileUp, fileUp.name);
    return this.http.post(endpoint, fuckCode);
  }
}
