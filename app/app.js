/*
  Train Location
  https://api.wmata.com/TrainPositions/TrainPositions?contentType=json&api_key=byabvhbdhp2uuzx76euucn96
   
  Get all Trains
  https://api.wmata.com/StationPrediction.svc/json/GetPrediction/All?contentType={contentType}&api_key=byabvhbdhp2uuzx76euucn96
*/

angular.module('app', [])
  .controller('wmataDataController', ['$scope','$http', function($scope,$http) {

    $scope.stationLoaded = false;

    $scope.api_key = "dedee1cf09004501a5865c069536f925";

    $http.get("https://api.wmata.com/StationPrediction.svc/json/GetPrediction/All?contentType={contentType}&api_key=" + $scope.api_key)
      .success(function (data) {
          $scope.stationData = data.Trains;
      });

    $scope.Line = '-Line';
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
