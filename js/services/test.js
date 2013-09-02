'use strict';

/* Services */

angular.module('testService', [])
    .factory('Test', function(){
        return {
            questions : [],
            currentQuestion : null,
            addQuestion : function(question) {
                if (this._isInterface(question)) {
                    this.questions.push(question);
                }
            },

            answer : function(note) {
                var question = this.questions[this.currentQuestion];
                var nextNote = question.answerNotes.length;
                question.setAnswerNote(nextNote, note);
            },

            clear : function() {
                this.questions = [];
                this.currentQuestion = null;
            },

            isRun : function() {
                return this.currentQuestion !== null;
            },

            _isInterface : function(question) {
                return true;
            }
        }
    })
;