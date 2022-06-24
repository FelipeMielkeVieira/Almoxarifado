import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SacolasComponent } from './sacolas.component';

describe('SacolasComponent', () => {
  let component: SacolasComponent;
  let fixture: ComponentFixture<SacolasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacolasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SacolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
