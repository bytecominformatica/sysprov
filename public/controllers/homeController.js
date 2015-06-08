var app = angular.module("sysprov");

app.controller("HomeCtrl", function($scope){
   $scope.products = [
                         { name: "Azurite", price: 2.95 },
                         { name: "Bloodstone", price: 5.95 },
                         { name: "Zircon", price: 3.95 }
                       ];
});