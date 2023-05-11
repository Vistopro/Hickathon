import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Absence } from '../interfaces/absences';

@Injectable({
  providedIn: 'root'
})
export class AbsenceFormService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.apiUrl;
    this.myApiUrl = 'api/v1/manager/absences';
   }

   viewAbsenceRequests(): Observable<Absence[]>{
     return this.http.get<Absence[]>(this.myAppUrl + this.myApiUrl);
   }
}
