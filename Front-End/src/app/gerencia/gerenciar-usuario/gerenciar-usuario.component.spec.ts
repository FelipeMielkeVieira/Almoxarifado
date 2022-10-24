import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarUsuarioComponent } from './gerenciar-usuario.component';

describe('GerenciarUsuarioComponent', () => {
  let component: GerenciarUsuarioComponent;
  let fixture: ComponentFixture<GerenciarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
