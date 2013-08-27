function sc(src) {
    document.write('<script src="js/'+ src +'.js"></script>');
}

sc('constants');
sc('lib/angular/angular');
sc('lib/angular/angular-ui-router.min');
sc('app');

sc('class/question');

sc('services/test');
sc('services/keys');
sc('services/question');

sc('controllers/index');
sc('controllers/keyboard');