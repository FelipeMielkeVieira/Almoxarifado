import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOrdernar } from './modal-ordenar.component';

describe('ModalOrdernar', () => {
  let component: ModalOrdernar;
  let fixture: ComponentFixture<ModalOrdernar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalOrdernar ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalOrdernar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
