import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarItem } from './modal-editar-item.component';

describe('ModalEditarItem', () => {
  let component: ModalEditarItem;
  let fixture: ComponentFixture<ModalEditarItem>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarItem ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});