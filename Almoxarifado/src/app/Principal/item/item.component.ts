import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item;

  textoDescartavel: string;

  constructor() { }

  ngOnInit() {
    if(this.item.descartavel) {
      this.textoDescartavel = "Descartável"
    } else {
      this.textoDescartavel = "Não Descartável"
    }
  }

}
