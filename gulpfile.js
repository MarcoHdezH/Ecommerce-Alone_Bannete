const {src, dest, watch} = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber = require('gulp-plumber');

function css(done){

    src('src/scss/**/*.scss')       //Identificar SASS
    .pipe( plumber() )
    .pipe( sass() )                //Compilar SASS
    .pipe( dest("build/css") );    //Almacenar SASS

    done();
}

function dev( done ) {
    watch('src/scss/**/*.scss', css);
    //watch('src/js/**/*.js', javascript);
    done();
}

exports.css = css;
exports.dev = dev;