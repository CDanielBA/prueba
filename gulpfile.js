const {series,src,dest}=require('gulp');
const sass=require('gulp-sass')(require('sass'));
const {watch}=require('gulp')
var concat = require('gulp-concat');


function css() {
    return src('src/scss/app.scss')
    .pipe(sass({}))
    .pipe(dest('./build/css'))
    
}
function watchArchivos(){
    watch('src/scss/**/*.scss', css);//* recorre en la misma carpeta ** recorre en subcarpetas
    watch('src/js/**/*.js', javascript);
}
// gulp.task('scripts',function(){
//     return gulp.src('src/js/**/*.js')
//     .pipe(concat('all.js'))    
//     .pipe(dest('./build/js'))
// })

function javascript(){
    
    return src('src/js/**/*.js')
    .pipe(concat('bundle.js'))    
    .pipe(dest('./build/js'))
}
exports.css=css;
exports.watchArchivos=watchArchivos;
exports.javascript=javascript
// exports.build=parallel(css,javascript,watchArchivos)
exports.default=series(css,javascript, watchArchivos)
