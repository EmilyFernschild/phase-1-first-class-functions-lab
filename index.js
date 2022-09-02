
const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);

const returnLastTwoDrivers = (drivers) => drivers.slice(2,4);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (fareQuintupler) => {
    return function(fare){
        return fare * fareQuintupler;
    }
} 

const fareDoubler = (doubler) => doubler * 2;
    
const fareTripler = (tripler) => tripler * 3;

const selectDifferentDrivers = (drivers, names) => {
    if (names === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers)
    }
    else if (names === returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers)
    }
}