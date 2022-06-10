// Code your solution in this file!
//const drivers = ["Kioko", "John", "Carter", "Alice"]

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fare){
    return function(number){
        return (fare * number)
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, diverToReturn){
    return diverToReturn(drivers);
}