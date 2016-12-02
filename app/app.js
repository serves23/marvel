/*
  Train Location
  https://api.wmata.com/TrainPositions/TrainPositions?contentType=json&api_key=byabvhbdhp2uuzx76euucn96
   
  Get all Trains
  https://api.wmata.com/StationPrediction.svc/json/GetPrediction/All?contentType={contentType}&api_key=byabvhbdhp2uuzx76euucn96
*/

angular.module('app', [])
  .controller('wmataDataController', ['$scope','$http', function($scope,$http) {

    $scope.stationLoaded = false;

    $scope.api_key = "ecc4d531588bc6a23764b0af2d012ff0";

    $http.get("http://gateway.marvel.com/v1/public/comics?apikey=" + $scope.api_key)
      .success(function (data) {
          $scope.Character = data.name;
      });

    //$scope.Line = '-Line';
}]);

/*

{
  "TrainPositions": [
    {
      "TrainId": "060",
      "CarCount": 0,
      "DirectionNum": 1,
      "CircuitId": 2845,
      "SecondsAtLocation": 57314,
      "ServiceType": "Unknown"
    }
  ]
}

{
  "Trains": [
    {
      "Car": "8",
      "Destination": "Glenmont",
      "DestinationCode": "B11",
      "DestinationName": "Glenmont",
      "Group": "1",
      "Line": "RD",
      "LocationCode": "A01",
      "LocationName": "Metro Center",
      "Min": "BRD"
    }
  ]
}

 */
