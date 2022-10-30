import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarFiltrosComponent } from './gerenciar-filtros.component';

describe('GerenciarFiltrosComponent', () => {
  let component: GerenciarFiltrosComponent;
  let fixture: ComponentFixture<GerenciarFiltrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarFiltrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarFiltrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
