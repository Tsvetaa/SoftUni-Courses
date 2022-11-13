function roadRader(speed, area) {
    speed = Number(speed);
    let result = "";
    let speedLimit = 0;
    let dif = 0;
    let status = "";

    switch (area) {
        case "city": speedLimit = 50; break;
        case "residential": speedLimit = 20; break;
        case "interstate": speedLimit = 90; break;
        case "motorway": speedLimit = 130; break;
    }

    if (speed > 0 && speed <= speedLimit) {
        result = `Driving ${speed} km/h in a ${speedLimit} zone`;
    } else {
        dif = speed - speedLimit;
        if (dif <= 20) {
            status = "speeding";
        } else if (dif >= 20 && dif <= 40) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }
        result = `The speed is ${dif} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
    }

    console.log(result);
}

roadRader(40, 'city');
roadRader(21, 'residential');
roadRader(120, 'interstate');
roadRader(200, 'motorway')