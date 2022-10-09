import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaFeitoComponent } from './alerta-feito.component';

describe('AlertaFeitoComponent', () => {
  let component: AlertaFeitoComponent;
  let fixture: ComponentFixture<AlertaFeitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertaFeitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertaFeitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
