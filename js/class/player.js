function Player() {

    this
        ._load()
    ;
}

Player.FOLDER_SOUND = 'sounds/ogg/';

Player.prototype = {

    _load:function(){
        var self = this;
        this.sounds = {};
        $(function(){
            self.container = $('<div style="display: none;"></div>');
            $('body').append(self.container);

            for (var octaveName in constants.OCTAVE) {
                for (var noteName in constants.NOTE) {
                    var name = constants.OCTAVE[octaveName] + constants.NOTE_SEPARATOR + constants.NOTE[noteName];
                    self.sounds[name] = self._getSound(name);
                    self.container.append(self.sounds[name]);
                }
            }
        });
    },

    play:function(name){
        var oldSound = this.sounds[name];
        oldSound.addClass('old');
        oldSound[0].play();

        this.sounds[name] = this._getSound(name);
        this.container.append(this.sounds[name]);
        setTimeout(function(){
            oldSound.remove();
        }, 1000);
    },

    _getSound:function(name){
        var path = this._getPath(name);
        return $('<audio src="'+ path +'"></audio>');
    },

    _getPath : function(name) {
        name = name.toLowerCase();
        return Player.FOLDER_SOUND + 'c' + name + '.ogg';
    }

}
