import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesReservaComponent } from './detalhes-reserva.component';

describe('DetalhesReservaComponent', () => {
  let component: DetalhesReservaComponent;
  let fixture: ComponentFixture<DetalhesReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});