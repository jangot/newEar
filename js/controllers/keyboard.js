"use strict";

function KeyboardCtrl($scope, $log, Keys, Test) {

    $scope.keys = Keys.all();

    $scope.push = function(key) {
        $log.log(key);
    }

}

//KeyboardCtrl.$inject = ['$scope', '$log', 'Keys'];