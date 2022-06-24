import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaAtendenteComponent } from './reserva-atendente.component';

describe('ReservaAtendenteComponent', () => {
  let component: ReservaAtendenteComponent;
  let fixture: ComponentFixture<ReservaAtendenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaAtendenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaAtendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
