import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReservarItem } from './modal-reservar-item.component';

describe('ModalReservarItem', () => {
  let component: ModalReservarItem;
  let fixture: ComponentFixture<ModalReservarItem>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalReservarItem ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalReservarItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});