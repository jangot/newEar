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

    setAnswerNote : function(n, note) {
        this.answerNotes[n] = note;
    }
}