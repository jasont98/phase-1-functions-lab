const distanceFromHqInBlocks = distance => {
   return Math.abs(42 - distance);
}
const distanceFromHqInFeet = distance => {
    return Math.abs(42 - distance) * 264;
}
function distanceTravelledInFeet(dist1, dist2) {
    return Math.abs(dist1 - dist2) * 264;
}

function calculatesFarePrice(dist1, dist2) {
    const distance = Math.abs(dist1 - dist2) * 264;
    if (distance <= 400) {
        return 0;
    } else if (distance <= 2000) {
        return (distance - 400) *.02;
    } else if (distance <= 2500) {
        return 25;
    } else if (distance > 2501) {
        return "cannot travel that far"
    }
}
