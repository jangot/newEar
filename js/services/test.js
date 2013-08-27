'use strict';

/* Services */

angular.module('testsService', [])
    .factory('Tests', function(){
        return {
            questions : [],
            currentQuestion : null,
            addQuestion : function(question) {
                if (this._isInterface(question)) {
                    this.questions.push(question);
                }
            },
            setCurrentQuestion : function(number) {
                if (this.questions[number]) {
                    this.currentQuestion = number;
                }
            },

            clean : function() {
                this.questions = [];
                this.currentQuestion = null;
            },

            _isInterface : function(question) {
                return true;
            }
        }
    })
;