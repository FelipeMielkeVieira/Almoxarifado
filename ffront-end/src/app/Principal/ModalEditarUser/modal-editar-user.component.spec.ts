import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarUserComponent } from './modal-editar-user.component';

describe('ModalEditarUserComponent', () => {
  let component: ModalEditarUserComponent;
  let fixture: ComponentFixture<ModalEditarUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});