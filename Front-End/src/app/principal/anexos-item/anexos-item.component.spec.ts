import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnexosItemComponent } from './anexos-item.component';

describe('AnexosItemComponent', () => {
  let component: AnexosItemComponent;
  let fixture: ComponentFixture<AnexosItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnexosItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnexosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
