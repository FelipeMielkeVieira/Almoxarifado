import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarDescricaoItemComponent } from './cadastrar-descricao-item.component';

describe('CadastrarDescricaoItemComponent', () => {
    let component: CadastrarDescricaoItemComponent;
    let fixture: ComponentFixture<CadastrarDescricaoItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CadastrarDescricaoItemComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CadastrarDescricaoItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
