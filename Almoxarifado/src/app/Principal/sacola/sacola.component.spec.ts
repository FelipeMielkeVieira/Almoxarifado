import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SacolaComponent } from './sacola.component';

describe('SacolaComponent', () => {
  let component: SacolaComponent;
  let fixture: ComponentFixture<SacolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SacolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
