"use strict";

function TestCtrl($scope, Test, Player) {

    $scope.playQuestion = function() {
        if(Test.isRun()) {
            var n = Test.currentQuestion;
            Test.questions[n].play(Player);
        }
    }

    $scope.nextQuestion = function() {
        var n = 0;
        if(Test.isRun()) {
            n = Test.currentQuestion + 1;
        }

        if (Test.questions[n]) {
            Test.currentQuestion = n;
        }
    }

    $scope.prevQuestion = function() {
        var n;
        if(Test.isRun()) {
            var n = Test.currentQuestion
        } else {
            n = 0;
        }

        if (n > 0) {
            n--;
        }
        Test.currentQuestion = n;
    }

};