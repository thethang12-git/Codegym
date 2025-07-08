class Date {
    constructor (day,month,year){
    this.day = day;
    this.month = month;
    this.year = year;
    }
    getDay(){
        return this.day
    }
    getMonth(){
        return this.month
    }
    getYear(){
        return this.year
    }
    setDay(day){
        this.day = day
    }
    setMonth(month){
        this.month = month
    }
    setYear(year){
        this.year = year
    }
}

let myDate = new Date(18,12,2000)
document.write(`lớp ban đầu là:tôi sinh ngày ${myDate.day} tháng ${myDate.month} năm ${myDate.year} <br>`)
myDate.setDay(28)
myDate.setMonth(11)
myDate.setYear(2082)
document.write(`lớp sau khi thay đổi: tôi sinh ngày ${myDate.day} tháng ${myDate.month} năm ${myDate.year}`)

