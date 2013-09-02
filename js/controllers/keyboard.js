"use strict";

function KeyboardCtrl($scope, $log, Keys, Test, Player) {

    $scope.keys = Keys.all();

    $scope.push = function(key) {
        Player.play(key);
        if (Test.isRun()) {
            Test.answer(key);
        }
    }

}
