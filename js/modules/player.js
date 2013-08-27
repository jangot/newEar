'use strict';

/* Services */

angular
    .module('PlayerFactory', [])
    .factory('Player', function(){
        return new Player()
    });
;