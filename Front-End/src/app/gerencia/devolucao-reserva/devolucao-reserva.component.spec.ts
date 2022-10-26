import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucaoReservaComponent } from './devolucao-reserva.component';

describe('DevolucaoReservaComponent', () => {
  let component: DevolucaoReservaComponent;
  let fixture: ComponentFixture<DevolucaoReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DevolucaoReservaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolucaoReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});