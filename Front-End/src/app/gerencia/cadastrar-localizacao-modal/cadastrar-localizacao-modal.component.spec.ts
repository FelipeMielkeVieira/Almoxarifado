import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarLocalizacaoModalComponent } from './cadastrar-localizacao-modal.component';

describe('LocalizacaoComponent', () => {
  let component: CadastrarLocalizacaoModalComponent;
  let fixture: ComponentFixture<CadastrarLocalizacaoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarLocalizacaoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarLocalizacaoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
