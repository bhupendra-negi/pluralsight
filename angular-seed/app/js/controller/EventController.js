//'use strict';
console.log(eventApp);
eventApp.controller("EventController", function($scope) {

  $scope.event = {
    name: "Angular bootcamp",
    date: "15/12/2015",
    time: "10:00 am",
    location: {
      address: "3dplm software",
      area: "Wakad",
      city: "Pune"
    }
  };

})
