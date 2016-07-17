var gulp = require('gulp');
var webserver = require('gulp-webserver');
var nodemon = require('gulp-nodemon');


gulp.task('serve', function () {
    gulp.src('.')
            .pipe(webserver({
                livereload: true,
                directoryListing: true,
                open: "app/index.html"
            }));
});


gulp.task('proxy', function () {
    nodemon({
        script: './server/server.js',
        watch: 'server.js'

    }).on('restart', function () {
        console.log('The API mock was restarted by Nodemon');
    });
});

gulp.task('start', ['proxy', 'serve']);
