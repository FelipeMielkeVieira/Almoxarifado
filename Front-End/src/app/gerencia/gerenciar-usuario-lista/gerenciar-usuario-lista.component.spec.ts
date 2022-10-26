import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarUsuarioListaComponent } from './gerenciar-usuario-lista.component';

describe('GerenciarUsuarioComponent', () => {
  let component: GerenciarUsuarioListaComponent;
  let fixture: ComponentFixture<GerenciarUsuarioListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarUsuarioListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarUsuarioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
