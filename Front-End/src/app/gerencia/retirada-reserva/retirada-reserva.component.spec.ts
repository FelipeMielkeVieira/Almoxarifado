import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetiradaReservaComponent } from './retirada-reserva.component';

describe('RetiradaReservaComponent', () => {
  let component: RetiradaReservaComponent;
  let fixture: ComponentFixture<RetiradaReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RetiradaReservaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetiradaReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});