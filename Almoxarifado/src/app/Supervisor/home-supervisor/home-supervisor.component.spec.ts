import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSupervisorComponent } from './home-supervisor.component';

describe('HomeSupervisorComponent', () => {
  let component: HomeSupervisorComponent;
  let fixture: ComponentFixture<HomeSupervisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSupervisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
