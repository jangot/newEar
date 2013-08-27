"use strict";

angular
    .module('ear', [
        'ui.state',
        'keysService',
        'testService',
        'questionService'
    ])
    .constant('CONST', constants)
    .config(['$httpProvider', function($httpProvider) {
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }])
    .config(function($stateProvider){
        $stateProvider
            .state('index', {
                url: "",
                views: {
                    "viewKeyboard": {
                        templateUrl: "/keyboard.html"
                    }
                }
            })
        ;
    })
;