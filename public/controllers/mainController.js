var app = angular.module("sysprov");

app.controller("MainCtrl", function($scope){
    $scope.app = "Sysprov"
    $scope.title = "Home"
    $scope.content = "partial/cliente.html"
    $scope.controller = "controllers/homeController.js"

    $scope.setContent = function(title, content) {
        $scope.title = title;
        $scope.content = 'partial/' + content + '.html';
    }
});