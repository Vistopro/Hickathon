import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../interfaces/login';
@Injectable({
  providedIn: 'root'
})
export class loginService {
  private myAppUrl: string;
  private myApiUrl: string;

constructor(private http: HttpClient) {
    this.myAppUrl = environment.apiUrl;
    this.myApiUrl = 'api/v1/user';
   }

   login(login : Login): Observable<string>{
     return this.http.post<string>(this.myAppUrl + this.myApiUrl, login);
   }}
