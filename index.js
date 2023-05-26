function gettime() {
    var dateTime = new Date()
    var hour = dateTime.getHours()
    var minute = dateTime.getMinutes()
    var second = dateTime.getSeconds()
    var session = document.getElementById('session')
    if (hour > 12) {
        session.innerHTML = 'PM'
        hour = hour - 12
    } else {
        session.innerHTML = 'AM';
    }
    if (hour < 10) {
        hour = "0" + hour
    }
    if (minute < 10) {
        minute = "0" + minute
    }
    if (second < 10) {
        second = "0" + second
    }


    document.getElementById('hrs').innerHTML = hour;
    document.getElementById('min').innerHTML = minute;
    document.getElementById('sec').innerHTML = second;

}
setInterval(gettime, 10);