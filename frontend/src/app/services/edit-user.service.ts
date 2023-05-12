import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/addUser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditUserService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.apiUrl;
    this.myApiUrl = 'api/v1/manager/users';
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(this.myAppUrl + this.myApiUrl + '/' + id);
  }

  editUser(user: User): Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl, user);
  }
}
