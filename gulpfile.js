//Abans de res es recomenable copiar i moure les imatges a la carpeta DIST
var gulp = require('gulp');


//JS
var obfuscate = require('gulp-obfuscate');

gulp.task('obfuscator', function() {
    return gulp.src('penjat.js')
        .pipe(obfuscate())
        .pipe(gulp.dest('dist'));
});


//CSS
var cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
    return gulp.src('penjat.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist'));
});


//HTML En principi no se perque aquest hem diu que no s'ha pogut completar, i crec que falten coses en el html, pero crea l'arxiu i tot
var htmlmin = require('gulp-html-minifier');

gulp.task('minify', function() {
    gulp.src('penjat.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});