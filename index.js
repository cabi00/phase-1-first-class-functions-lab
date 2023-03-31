const returnFirstTwoDrivers = function(drivers) {  
    return drivers.slice(0,2);
    }

const returnLastTwoDrivers = function(drivers) {  
     return drivers.slice(-2);
}

//const selectingDrivers  = [returnFirstTwoDrivers(), returnLastTwoDrivers()] 
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(multi){
return function(){
    return multi*multi;
    }
}
const fareDoubler = function(multi){
return multi*2;
}
const fareTripler = function(multi){
    return multi*3;
}
const selectDifferentDrivers = function(drivers, funct){
    return funct(drivers);
    }