import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfiguracoesComponent } from './modal-configuracoes.component';

describe('ModalConfiguracoesComponent', () => {
  let component: ModalConfiguracoesComponent;
  let fixture: ComponentFixture<ModalConfiguracoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfiguracoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfiguracoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
