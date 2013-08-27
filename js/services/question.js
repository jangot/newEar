'use strict';

/* Services */

angular.module('questionService', [])
    .factory('Question', function(){

        return {
            create : function(intervals, notes) {
                var currentNote = this._getStartNote(intervals, notes);
                var result = [notes[currentNote]];

                for (var i = 0; i < intervals.length; i++) {
                    currentNote += intervals[i];
                    result.push(notes[currentNote]);

                }

                return new Question(result);
            },

            _getStartNote : function(intervals, notes) {
                var intervalLength = 0
                angular.forEach(intervals, function(i, interval) {
                    intervalLength += Number(interval);
                });

                var max = notes.length - intervalLength;

                return getRandomInt(0, max - 12);
            }
        }
    })
;

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

