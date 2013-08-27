"use strict";

function KeyboardCtrl($scope, $log, Keys, Test, Player) {

    $scope.keys = Keys.all();

    $scope.push = function(key) {
        Player.play(key);
    }

}

//KeyboardCtrl.$inject = ['$scope', '$log', 'Keys'];