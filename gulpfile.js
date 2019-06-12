// Adiciona os modulos instalados
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// Funçao para compilar o SASS e adicionar os prefixos
function compilaSass() {
  return gulp
  .src('css/scss/*.scss')
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('css/'))
  .pipe(browserSync.stream());
};

// Tarefa de gulp para a função de SASS
gulp.task('sass', compilaSass);

// Js Plugins
// function pluginsJs(){
//   return gulp.src(['js/plugins/*.js'])
//   .pipe(concat('plugin.js'))
//   .pipe(gulp.dest('js/plugin'))
//   .pipe(browserSync.stream());
// }

// gulp.task('pluginsjs', pluginsJs);

// Função para juntar o JS
function gulpJs(){
  return gulp.src('js/**/*.js')
  /*.pipe(babel({
  .pipe(concat('script.js'))
    presets: ['@babel/env']
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
  }))*/
  .pipe(browserSync.stream())
};

gulp.task('mainjs', gulpJs)

// Função para iniciar o browser
function browser() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
};;;

// Tarefa para iniciar o browser-sync
gulp.task('browser-sync', browser);

// Função de watch do Gulp
function watch() {
  gulp.watch('css/scss/*.scss', compilaSass);
  gulp.watch('js/**/*.js', gulpJs);
  // gulp.watch('js/plugins/*.js');
  gulp.watch(['*.html']).on('change', browserSync.reload);
};

// Inicia a tarefa de watch
gulp.task('watch', watch);

// Tarefa padrão do Gulp, que inicia o watch e o browser-sync
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'mainjs'));