import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/addUser';
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

   addUser(user: User): Observable<any>{
     return this.http.post(this.myAppUrl + this.myApiUrl, user);
   }}
