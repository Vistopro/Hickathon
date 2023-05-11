import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAbsencesComponent } from './list-absences.component';

describe('ListAbsencesComponent', () => {
  let component: ListAbsencesComponent;
  let fixture: ComponentFixture<ListAbsencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAbsencesComponent]
    });
    fixture = TestBed.createComponent(ListAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
