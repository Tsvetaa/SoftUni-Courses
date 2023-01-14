function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let ratio = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    daysBtn.addEventListener('click', onclick);
    hoursBtn.addEventListener('click', onclick);
    minutesBtn.addEventListener('click', onclick);
    secondsBtn.addEventListener('click', onclick);

    function convert(value, unit) {
        let days = value / ratio[unit];
        return {
            days: days,
            hours: days * ratio.hours,
            minutes: days * ratio.minutes,
            seconds: days * ratio.seconds
        }
    }

   function onclick(event) {
        let input = event.target.parentElement.querySelector('input[type ="text"]');
        console.log(input);
        console.log(input.id);
        let time = convert(Number(input.value), input.id)

        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;
    }     

}