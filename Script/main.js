
//Adds 25 min to time
function addTime(min) {
    let now = new Date();
    console.log(now);
    let endTime = now.setMinutes(now.getMinutes() + min);
    console.log(now);
    let timeToGo = endTime - now;
    console.log(timeToGo);
}

function startTime() {
    addTime(25);

}

startTime();