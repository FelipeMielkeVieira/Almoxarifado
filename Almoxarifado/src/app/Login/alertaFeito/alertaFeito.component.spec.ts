import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaFeitoComponent } from './alertaFeito.component';

describe('LoginComponent', () => {
  let component: AlertaFeitoComponent;
  let fixture: ComponentFixture<AlertaFeitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertaFeitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertaFeitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
