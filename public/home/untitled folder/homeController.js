// HomeCtrl

angular.module('movme')
.controller('HomeController',['$state','$scope','$rootScope','$q','$http','$location','$interval','$timeout','$stateParams','$routeParams','$window','$document', function($state,$scope,$rootScope,$q,$http,$location,$interval,$timeout,$stateParams,$routeParams,$window,$document) {
$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    $scope.$watch('$viewContentLoaded', function() {

        Pleasure.init();
        Layout.init();
        Layout.handleMaterialAnimation();

      });

}]);