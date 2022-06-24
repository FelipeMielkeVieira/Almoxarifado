import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaComponent } from './reserva.component';

describe('ReservaComponent', () => {
  let component: ReservaComponent;
  let fixture: ComponentFixture<ReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
