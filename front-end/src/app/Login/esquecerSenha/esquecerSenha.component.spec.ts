import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsquecerSenhaComponent } from './esquecerSenha.component';

describe('LoginComponent', () => {
  let component: EsquecerSenhaComponent;
  let fixture: ComponentFixture<EsquecerSenhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EsquecerSenhaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsquecerSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
