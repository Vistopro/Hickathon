import { Component, OnInit } from '@angular/core';
import { Absence } from 'src/app/interfaces/absences';
import { AbsenceFormService } from 'src/app/services/absence-form.service';

@Component({
  selector: 'app-list-absences',
  templateUrl: './list-absences.component.html',
  styleUrls: ['./list-absences.component.css']
})
export class ListAbsencesComponent implements OnInit {
  listAbsences: Absence[] = [  ]


constructor(private _absenceFormService: AbsenceFormService) { }

ngOnInit(): void {
  this.viewAbsenceRequests();
}

viewAbsenceRequests(){
  this._absenceFormService.viewAbsenceRequests().subscribe(data => {
    this.listAbsences = data;

})
}
}
