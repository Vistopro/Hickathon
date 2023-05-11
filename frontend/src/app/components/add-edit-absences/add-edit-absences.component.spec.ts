import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAbsencesComponent } from './add-edit-absences.component';

describe('AddEditAbsencesComponent', () => {
  let component: AddEditAbsencesComponent;
  let fixture: ComponentFixture<AddEditAbsencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditAbsencesComponent]
    });
    fixture = TestBed.createComponent(AddEditAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
