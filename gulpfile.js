const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('compile-sass', function() {
    return gulp.src('css/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

gulp.task('watch-sass', function() {
    gulp.watch('css/sass/*.scss', ['compile-sass']);
})

gulp.task('default', ['watch-sass'])