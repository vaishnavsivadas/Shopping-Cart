var app = angular.module('app', []);
        
        app.controller('ctrl', ["$scope", "$http", function ($scope, $http) {
          $http.get("data/category.json").then(function (response) {
            $scope.results = [];
            $scope.images = response.data;
            angular.forEach($scope.images, function (value, key) {
              $scope.results.push({ item: key, image: value });
            });
          });
          
          $scope.deleting = function () {
              $scope.search = null;
          }
        }]);

