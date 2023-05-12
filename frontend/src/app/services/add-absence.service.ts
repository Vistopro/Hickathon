import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Absence } from '../interfaces/absences';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddAbsenceService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.apiUrl;
    this.myApiUrl = 'api/v1/users/:id_user';

   }
   addAbsence(absence: Absence): Observable<any>{
      return this.http.post(this.myAppUrl + this.myApiUrl, absence);
    }
}


