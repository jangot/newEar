'use strict';

/* Services */

angular.module('keysServices', ['CONST']).
    factory('Keys', function(CONST){
        var keys = [];

        angular.forEach(CONST.OCTAVE, function(i, octave){
            angular.forEach(CONST.NOTE, function(j, note){
                keys.push(octave + '|' + note);
            });
        });

        return keys;
    });
