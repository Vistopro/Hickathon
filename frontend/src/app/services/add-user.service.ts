import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  private myAppUrl: string;
  private myApiUrl: string;

constructor(private http: HttpClient) {
    this.myAppUrl = environment.apiUrl;
    this.myApiUrl = 'api/v1/manager/users';
   }

   addUser(name: string, email: string, password: string, rol: string, absences: number, department: string): Observable<any>{
    const body = {name, email, password, rol, absences, department };
     return this.http.post(this.myAppUrl + this.myApiUrl, body);
   }}
