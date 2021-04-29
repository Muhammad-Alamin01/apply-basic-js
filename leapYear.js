

function isLeapYear(year) {
    const reminder = year % 4
    if (reminder == 0) {
        // console.log(`Your ${year} is leap year`);
        return true;
    } else {
        // console.log(`Your ${year} is not leap year`);
        return false;
    }
}


const check = isLeapYear(2000);
console.log(check);