import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaProfessorComponent } from './reserva-professor.component';

describe('ReservaProfessorComponent', () => {
  let component: ReservaProfessorComponent;
  let fixture: ComponentFixture<ReservaProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});