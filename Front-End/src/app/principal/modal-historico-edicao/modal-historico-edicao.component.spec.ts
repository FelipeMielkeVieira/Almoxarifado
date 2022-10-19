import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHistoricoEdicaoComponent } from './modal-historico-edicao.component';

describe('ModalHistoricoEdicaoComponent', () => {
  let component: ModalHistoricoEdicaoComponent;
  let fixture: ComponentFixture<ModalHistoricoEdicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHistoricoEdicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHistoricoEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});