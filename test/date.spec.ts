import {
  fullTime,
  getDate,
  formatDate,
  TDate,
  getDiffTime,
  getDiffTimeDescription
} from '../src/date'

test("fullTime ?", () => {
    expect(fullTime(0)).toBe('00')
    expect(fullTime(9)).toBe('09')
    expect(fullTime(10)).toBe('10')
});

test("getDate ?", () => {
    let result1:TDate = {
        years: 2020,
        months: 7,
        days: 10,
        hours: 8,
        minutes: 0,
        seconds: 0
      }
    expect(getDate('2020-07-10')).toStrictEqual(result1)

    let result2:TDate = {
        years: 2020,
        months: 8,
        days: 2,
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

test('getDiffTime ?',done=>{
  expect(getDiffTime('1986-07-03 15:03:23','2020-08-03 18:02:01')).toStrictEqual(
    { years: 34, months: 1, days: 1, hours: 3, minutes: 58, seconds: 38 }
  )
  expect(getDiffTime('2019-02-03','2020-03-03')).toStrictEqual(
    { years: 1, months: 0, days: 28, hours: 0, minutes: 0, seconds: 0 }
  )
  done()
})

test('getDiffTimeDescription ?',done=>{
  expect(getDiffTimeDescription('1986-07-03 15:03:23','2020-08-03 18:02:01')).toBe('34年1月1日3时58分38秒')
  expect(getDiffTimeDescription('2019-07-03 15:03:23','2020-08-03 18:02:01',2)).toBe('1年1月')
  console.log(getDiffTimeDescription('2016-09-27T15:59:17.000Z',new Date(),2))
  done()
})

