import 'moment-timezone';
import * as moment from 'moment';

export class Util {


  public static getMoment(): any {
    return moment().tz('America/Bogota');
  }

  public static getDate(): Date {
    return moment().tz('America/Bogota').toDate();
  }

  public static getDatetime(): string {
    return moment().tz('UTC').format('YYYY-MM-DD[T]HH:mm:00.000[Z]');
  }

  public static addDays(days: number): string {
    return moment().add(days, 'days').tz('UTC').format('YYYY-MM-DD[T]HH:mm:00.000[Z]');
  }

  public static addYear(year: number): string {
    return moment().add(year, 'year').tz('UTC').format('YYYY-MM-DD[T]HH:mm:00.000[Z]');
  }

  public static addYearMoment(year: number): any {
    return moment().add(year, 'year').tz('UTC');
  }

  public static parseDate(date: string) {
    return moment(date).tz('America/Bogota').toDate();
  }

  public static getTimezone(date: string) {
    return moment.tz(date, 'America/Bogota').toDate();
  }

  public static getSimpleDate(date: string) {
    return moment(date).toDate();
  }

  public static getTimestamp() {
    return moment().tz('America/Bogota').toDate().getTime();
  }

  public static delay() {
    return new Promise(r => {
      return setTimeout(r, 1000);
    });
  }
}
