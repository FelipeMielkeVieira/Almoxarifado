import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDescricaoItemComponent } from './editar-descricao-item.component';

describe('EditarDescricaoItemComponent', () => {
    let component: EditarDescricaoItemComponent;
    let fixture: ComponentFixture<EditarDescricaoItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EditarDescricaoItemComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EditarDescricaoItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
