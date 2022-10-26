import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOcorrenciaComponent } from './modal-ocorrencia.component';

describe('ModalOcorrenciaComponent', () => {
  let component: ModalOcorrenciaComponent;
  let fixture: ComponentFixture<ModalOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalOcorrenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
