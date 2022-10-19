import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMotivoEdicaoComponent } from './modal-motivo-edicao.component';

describe('ModalMotivoEdicaoComponent', () => {
  let component: ModalMotivoEdicaoComponent;
  let fixture: ComponentFixture<ModalMotivoEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMotivoEdicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMotivoEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
