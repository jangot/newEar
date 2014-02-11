"use strict";

function RootCtrl($scope, $http, Test, Question, Keys) {

    $scope.tests = null;
    $scope.test = Test;
    $scope.selectedTest = null;

    $scope.load = function() {
        $http.get('tests/tests.json').success(function(data) {
            $scope.tests = data;
        });
    }

    $scope.selectTest = function(name) {
        if (!$scope.tests[name]) {
            return;
        }
        $scope.selectedTest = name;

        $scope.test.clear();

        var notes = Keys.all();
        for (var i = 0; i < $scope.tests[name].length; i++) {
            $scope.test.addQuestion(Question.create($scope.tests[name][i], notes));

        }
    }

}
