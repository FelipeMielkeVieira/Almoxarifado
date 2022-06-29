import { Day } from "./day.model";

export class CalendarCreator {
  private currentYear: number;
  private currentMonthIndex: number;

  constructor() {
    let date = new Date();
    this.currentYear = date.getFullYear();
    this.currentMonthIndex = date.getMonth(); 
  }

  public getCurrentMonth(): Day[] {
    return this.getMonth(this.currentMonthIndex, this.currentYear);
  }

  public getMonth(monthIndex: number, year: number): Day[] {
    let days = [];

    let firstday = this.createDay(1, monthIndex, year);

    //create empty days
    for (let i = 1; i < firstday.weekDayNumber; i++) {
      days.push({
        weekDayNumber: i,
        monthIndex: monthIndex,
        year: year,
      } as Day);
    }
    days.push(firstday);
    //

    let countDaysInMonth = new Date(year, monthIndex +1, 0).getDate();
    for (let i = 2; i < countDaysInMonth +1; i++) {
      days.push(this.createDay(i, monthIndex, year));
    }

    return days;
  }

  public getMonthName(monthIndex: number): string {
    switch (monthIndex + 1) {
      case 1:
        return "Janeiro";      
      case 2:
        return "Fevereiro";
      case 3:
        return "Março";
      case 4:
        return "Abril";
      case 5:
        return "Maio";
      case 6:
        return "Junho";
      case 7:
        return "Julho";
      case 8:
        return "Agosto";
      case 9:
        return "Setembro";
      case 10:
        return "Outubro";
      case 11:
        return "Novembro";
      case 12:
        return "Dezembro";
      default:
        return "Janeiro";
    }
  }

  public getWeekDayName(weekDay: number): string {
    switch (weekDay) {
      case 0:
        return "D"; // Sunday
      case 1:
        return "S"; // Monday
      case 2:
        return "T"; // Tuesday
      case 3:
        return "Q"; // Wednesday
      case 4:
        return "Q"; // Thursday
      case 5:
        return "S"; // Friday
      case 6:
        return "S"; // Saturday

      default:
        return "";
    }
  }

  private createDay(dayNumber: number, monthIndex: number, year: number) {
    let day = new Day();

    day.monthIndex = monthIndex;
    day.month = this.getMonthName(monthIndex);

    day.number = dayNumber;
    if(year) {
        day.year = year;
    } else {
        day.year = this.currentYear;
    }

    day.weekDayNumber = new Date(year, monthIndex, dayNumber).getDay() + 1;
    day.weekDayName = this.getWeekDayName(day.weekDayNumber);

    return day;
  }
}