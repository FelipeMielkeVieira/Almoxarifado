import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFiltragemItens } from './modal-filtragem-itens.component';

describe('ModalFiltragemItens', () => {
  let component: ModalFiltragemItens;
  let fixture: ComponentFixture<ModalFiltragemItens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFiltragemItens ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFiltragemItens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
