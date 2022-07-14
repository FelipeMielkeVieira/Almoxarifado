import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  @Input() corStatus: String = "none";

  constructor() { }

  ngOnInit() {
    //not working
    const status = document.querySelector("#status") as HTMLElement;
    console.log("status: ", status)
    switch (this.corStatus) {
      case "vermelhor":
        status.style.backgroundColor = "red";
        break;
      case "amarelo":
        status.style.backgroundColor = "yellow";
        break;
      case "verde":
        status.style.backgroundColor = "green";
        break;
      default:
        status.style.backgroundColor = "white";
        break;
    }
  }

  addColor() {
    console.log(this.corStatus);
  }

}
