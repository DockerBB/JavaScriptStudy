const gulp = require('gulp');
const  babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default',function () {
    //运行 ESLint
   gulp.src(["es6/**/*.js","public/es6/**/*.js"])
       .pipe(eslint())
       .pipe(eslint.format());
   //Node source
   gulp.src("es6/**/*.js")
       .pipe(babel())
       .pipe(gulp.dest("dist"));
   //浏览器资源
   gulp.src("public/es6/**/*.js")
       .pipe(babel())
       .pipe(gulp.dest("public/dist"));
});
