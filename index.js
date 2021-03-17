// speed limit = 70
// driving under or 70 we get ok in console
// for every 5 over 70 -> 1 point
// math.floor (1.3) returns 3
// 12points -> suspended
checkSpeed(82);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    const maxPoints = 12;
    if (speed < speedLimit)
        console.log('Ok');
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        console.log(Math.floor((speed - speedLimit) / kmPerPoint));
        if (points >= maxPoints)
            console.log('Licensee suspended');
            else
                console.log('Points', points)
    }
}
