import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritoItemComponent } from './favorito-item.component';

describe('ItemComponent', () => {
  let component: FavoritoItemComponent;
  let fixture: ComponentFixture<FavoritoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});