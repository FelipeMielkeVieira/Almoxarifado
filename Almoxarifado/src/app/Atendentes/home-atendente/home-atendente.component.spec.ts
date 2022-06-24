import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAtendenteComponent } from './home-atendente.component';

describe('HomeAtendenteComponent', () => {
  let component: HomeAtendenteComponent;
  let fixture: ComponentFixture<HomeAtendenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAtendenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAtendenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
