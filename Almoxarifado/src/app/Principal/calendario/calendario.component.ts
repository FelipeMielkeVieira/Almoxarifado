import { Component, OnInit } from "@angular/core";
import { CalendarCreator } from "./calendarCreator.service";
import { Day } from "./day.model";

@Component({
  selector: "app-calendario",
  templateUrl: "./calendario.component.html",
  styleUrls: ["./calendario.component.css"],
})
export class CalendarioComponent implements OnInit {
  public monthDays: Day[];

  public monthNumber: number;
  public year: number;

  public weekDaysName = [];

  diaSelecionado = 0;
  mesSelecionado = 0;
  anoSelecionado = 0;

  constructor(public calendarCreator: CalendarCreator) {}

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
    if(this.monthNumber == 12) {
      this.year++;
    }

    this.setMonthDays(this.calendarCreator.getMonth(this.monthNumber, this.year));
  }

  onPreviousMonth() : void{
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
  }

  selecionarDia(dia: number) {
    let elemento = document.getElementById("Dia" + dia.toString()) as HTMLElement;
    elemento.style.backgroundColor = 'gray';
    this.diaSelecionado = dia;
  }
}