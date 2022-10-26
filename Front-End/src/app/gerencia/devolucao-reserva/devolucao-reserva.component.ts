import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-devolucao-reserva',
    templateUrl: './devolucao-reserva.component.html',
    styleUrls: ['./devolucao-reserva.component.scss']
})
export class DevolucaoReservaComponent implements OnInit {

    constructor() { }

    @Input() reserva = { id: 0, data_retirada: "", data_devolucao: "", status: "", usuario_email: "" }

    @Output() fecharModal = new EventEmitter<string>();

    ngOnInit() {
    }

}