import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarCadastroComponent } from './confirmar-cadastro.component';

describe('ConfirmarCadastroComponent', () => {
  let component: ConfirmarCadastroComponent;
  let fixture: ComponentFixture<ConfirmarCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
