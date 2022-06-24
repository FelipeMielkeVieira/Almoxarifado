import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaSacolaComponent } from './minha-sacola.component';

describe('MinhaSacolaComponent', () => {
  let component: MinhaSacolaComponent;
  let fixture: ComponentFixture<MinhaSacolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaSacolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaSacolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
