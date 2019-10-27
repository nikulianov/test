const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const server = require('gulp-server-livereload');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass-compile', function(){
    return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError)) 
    .pipe(sourcemaps.write('./')) 
    .pipe(gulp.dest('./css/')) 
});


gulp.task('default',function(){
    gulp.watch('./scss/**/*.scss', gulp.series('sass-compile'))
    gulp.src(' ')
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      directoryListing: false,
      open: false
    }));
});

gulp.task('pref', function(){
   return gulp.src('css/style.css')
        .pipe(autoprefixer({
	   		overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'));
});
