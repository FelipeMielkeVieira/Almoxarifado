import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarSacolaComponent } from './adicionar-sacola.component';

describe('AjudaComponent', () => {
  let component: AdicionarSacolaComponent;
  let fixture: ComponentFixture<AdicionarSacolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarSacolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarSacolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});