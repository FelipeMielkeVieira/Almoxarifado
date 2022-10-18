import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFeedback } from './modal-feedback.component';

describe('ModalFeedback', () => {
  let component: ModalFeedback;
  let fixture: ComponentFixture<ModalFeedback>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFeedback ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFeedback);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});