function sc(src) {
    document.write('<script src="js/'+ src +'.js"></script>');
}

sc('constants');
sc('lib/jquery-2.0.3.min');
sc('lib/angular/angular');
sc('lib/angular/angular-ui-router.min');
sc('app');

sc('class/question');
sc('class/player');

sc('modules/player');
sc('services/test');
sc('services/keys');
sc('services/question');

sc('controllers/index');
sc('controllers/keyboard');
sc('controllers/test');