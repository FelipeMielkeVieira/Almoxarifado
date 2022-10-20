import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasSacolasComponent } from './minhas-sacolas.component';

describe('MinhasSacolasComponent', () => {
  let component: MinhasSacolasComponent;
  let fixture: ComponentFixture<MinhasSacolasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasSacolasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasSacolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});