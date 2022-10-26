import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaListaComponent } from './reserva-lista.component';

describe('ReservaComponent', () => {
  let component: ReservaListaComponent;
  let fixture: ComponentFixture<ReservaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});