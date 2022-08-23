import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import { CalendarCreator } from "./calendarCreator.service";
import { Day } from "./day.model";

@Component({
  selector: "app-calendario",
  templateUrl: "./calendario.component.html",
  styleUrls: ["./calendario.component.css"],
})
export class CalendarioComponent implements OnInit {
  
  @Output() salvarData = new EventEmitter<string>();
  
  public monthDays: Day[];

  public monthNumber: number;
  public year: number;

  public weekDaysName = [];

  diaSelecionado = 0;
  mesSelecionado = 0;
  anoSelecionado = 0;
  horaSelecionada = 0;

  constructor(public calendarCreator: CalendarCreator) { }

  ngOnInit(): void {
    this.setMonthDays(this.calendarCreator.getCurrentMonth());

    this.weekDaysName.push("D");
    this.weekDaysName.push("S");
    this.weekDaysName.push("T");
    this.weekDaysName.push("Q");
    this.weekDaysName.push("Q");
    this.weekDaysName.push("S");
    this.weekDaysName.push("S");
  }

  onNextMonth(): void {
    this.monthNumber++;

    if (this.monthNumber > 12) {
      this.monthNumber = 1;
    }
    if (this.monthNumber == 12) {
      this.year++;
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }

  onPreviousMonth(): void {
    this.monthNumber--;

    if (this.monthNumber < 1) {
      this.monthNumber = 12;
      this.year--;
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }

  private setMonthDays(days: Day[]): void {
    this.monthDays = days;
    this.monthNumber = this.monthDays[0].monthIndex;
    this.year = this.monthDays[0].year;

    this.fimDeSemana();
    this.selecionaAutomatico();
    // this.formatarMes();
  }

  fimDeSemana() {
    let numMes = this.monthNumber;
    let numAno = this.year;
    this.monthDays.forEach(function (e) {
      if ((e.weekDayNumber == 1 || e.weekDayNumber == 7) && e.number) {
        setTimeout(() => {
          document.getElementById("Dia" + e.number + "Mes" + numMes + "Ano" + numAno).style.backgroundColor = "#DEDEDE";
        }, 0);
      }
    });
  }

  // formatarMes() {
  //   let diasTotais = document.getElementsByClassName('day');
  //   let mesAnterior;
  //   let anoAnterior = this.year;

  //   if(this.monthNumber - 1 > 0) {
  //     mesAnterior = this.calendarCreator.getMonth(this.monthNumber - 1, this.year);
  //   } else {
  //     mesAnterior = this.calendarCreator.getMonth(11, this.year - 1);
  //     anoAnterior = this.year - 1;
  //   }

  //   let a = 0;
  //   for(let i = 0; i < diasTotais.length; i++) {
  //     if(diasTotais.namedItem("DiaMes" + this.monthNumber + "Ano" + this.year)) {
  //       diasTotais.namedItem("DiaMes" + this.monthNumber + "Ano" + this.year).id = "Dia" + (mesAnterior[mesAnterior.length - a]) + "Mes" + mesAnterior + "Ano" + anoAnterior;
  //       a++;
  //     }
  //   }
  // }

  selecionarDia(dia: Day) {

    if (dia.weekDayNumber != 1 && dia.weekDayNumber != 7) {
      let elemento = document.getElementById("Dia" + this.diaSelecionado + "Mes" + this.mesSelecionado + "Ano" + this.anoSelecionado) as HTMLElement;
      if (this.diaSelecionado != 0 && this.mesSelecionado == this.monthNumber && this.anoSelecionado == this.year) {
        elemento.style.backgroundColor = 'white';
      }

      elemento = document.getElementById("Dia" + dia.number + "Mes" + this.monthNumber + "Ano" + this.year) as HTMLElement;

      elemento.style.backgroundColor = '#5E88CB';
      this.diaSelecionado = dia.number;
      this.mesSelecionado = dia.monthIndex;
      this.anoSelecionado = dia.year;
    }
  }

  selecionaAutomatico() {
    if (this.anoSelecionado == this.year && this.mesSelecionado == this.monthNumber) {
      if (this.diaSelecionado != 0 && this.mesSelecionado != 0 && this.anoSelecionado != 0) {
        setTimeout(() => {
          document.getElementById("Dia" + this.diaSelecionado + "Mes" + this.mesSelecionado + "Ano" + this.anoSelecionado).style.backgroundColor = '#5E88CB';
        }, 0);
      }
    }
  }

  // diasIndisponiveis(datas: []) {
  //   let mesAtual = this.monthNumber.toString();
  //   let anoAtual = this.year.toString();

  //   datas.forEach((e: String) => {
  //     let partes = e.split("-", 2);
  //     if(partes[1] == mesAtual && partes[2] == anoAtual) {
  //       document.getElementById("Dia" + partes[0] + "Mes" + mesAtual + "Ano" + anoAtual).style.backgroundColor = 'red';
  //     }
  //   });
  // }

  salvar() {
    if(this.diaSelecionado != 0) {
      this.salvarData.emit(this.anoSelecionado + "-" + (this.mesSelecionado + 1) + "-" + this.diaSelecionado + " " + this.horaSelecionada);
    } else {
      this.salvarData.emit("__/__/____ 00:00");
    }
  }
}