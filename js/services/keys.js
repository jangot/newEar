'use strict';

/* Services */

angular.module('keysService', [])
    .factory('Keys', function(){
        return {
            all : function() {
                var keys = [];
                angular.forEach(constants.OCTAVE, function(i, octave){
                    angular.forEach(constants.NOTE, function(j, note){
                        keys.push(
                            {
                                id : octave + '|' + note,
                                note : note,
                                octave : octave
                            }
                        );
                    });
                });
                return keys;
            }
        }
    })
;
