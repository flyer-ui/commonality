import {fullTime,getDate,formatDate,TDate} from '../src/date'
import {log} from '../src/debug'

test("fullTime ?", () => {
    expect(fullTime(0)).toBe('00')
    expect(fullTime(9)).toBe('09')
    expect(fullTime(10)).toBe('10')
});

test("getDate ?", () => {
    let result1:TDate = {
        year: 2020,
        month: 7,
        day: 10,
        hours: 8,
        minutes: 0,
        seconds: 0
      }
    expect(getDate('2020-07-10')).toStrictEqual(result1)

    let result2 = {
        year: 2020,
        month: 8,
        day: 2,
        hours: 15,
        minutes: 0,
        seconds: 23
      }
    expect(getDate(new Date('2020-08-02 15:00:23'))).toStrictEqual(result2)
    
});

test("formatDate ?", () => {
    let param = '2020-08-02 15:03:22'
    expect(formatDate('yyyy-mm-dd','2020-08-02')).toBe('2020-08-02')

    expect(formatDate('yyyy-mm-dd hh:MM:ss','2020-08-02 15:03:22')).toBe('2020-08-02 15:03:22')
});

