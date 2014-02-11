function Question(notes) {
    if (!notes) {
        throw Error('There are notes.');
    }
    this.notes = notes;
    this.answerNotes = [];
}

Question.prototype = {
    notes : null,
    answerNotes : null,
    correct : null,

    setAnswerNote : function(n, note) {
        this.answerNotes[n] = note;
    },

    play : function(player) {
        for (var i in this.notes) {
            player.play(this.notes[i].id);
        }
    },

    check : function() {
        this.correct = true;
        for (var i = 0; i < this.notes.length; i++) {
            if (this.notes[i].id != this.answerNotes[i]) {
                this.correct = false;
                break;
            }
        }
    }
}