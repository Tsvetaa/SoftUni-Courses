function vacation (peopeCount, type, day) {
    let studentFridayPrice = 8.45;
    let businessFridayPrice = 10.90;
    let regularFridayPrice = 15;
    let studentSaturdayPrice = 9.8;
    let businessSaturdayPrice = 15.6;
    let regularSaturdayPrice = 20;
    let studentSundayPrice = 10.46;
    let businessSundayPrice = 16;
    let regularSundayPrice = 22.5;

    let studentDiscount = 0.15;
    let businessDiscount = 10;
    let regularDiscount = 0.5;

    let totalPrice = 0;

    if (type === "Business" && peopeCount >= 100) {
        peopeCount -= businessDiscount;
    }

    if (type === "Students" && day === "Friday") {
        totalPrice += peopeCount * studentFridayPrice;
    } else if (type === "Students" && day === "Saturday") {
        totalPrice += peopeCount * studentSaturdayPrice;
    } else if (type === "Students" && day === "Sunday") {
        totalPrice += peopeCount * studentSundayPrice;
    } else if (type === "Regular" && day === "Friday") {
        totalPrice += peopeCount * regularFridayPrice;
    } else if (type === "Regular" && day === "Saturday") {
        totalPrice += peopeCount * regularSaturdayPrice;
    } else if (type === "Regular" && day === "Sunday") {
        totalPrice += peopeCount * regularSundayPrice;
    } else if (type === "Business" && day === "Friday") {
        totalPrice += peopeCount * businessFridayPrice;
    } else if (type === "Business" && day === "Saturday") {
        totalPrice += peopeCount * businessSaturdayPrice;
    } else if (type === "Business" && day === "Sunday") {
        totalPrice += peopeCount * businessSundayPrice;
    }

    if(type === 'Students' && peopeCount >= 30) { 
        totalPrice = totalPrice * (1-studentDiscount);
    } else if (type === 'Regular' && peopeCount >= 10 && peopeCount <= 20) {
        totalPrice = totalPrice * (1-regularDiscount);
    }

    console.log(`Total price: ${(totalPrice).toFixed(2)}`);

}

vacation (100,"Business","Saturday");