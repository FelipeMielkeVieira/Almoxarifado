import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoExecucaoComponent } from './confirmacaoExecucao.component';

describe('LoginComponent', () => {
  let component: ConfirmacaoExecucaoComponent;
  let fixture: ComponentFixture<ConfirmacaoExecucaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmacaoExecucaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacaoExecucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
