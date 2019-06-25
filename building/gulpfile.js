const gulp = require('gulp');
const less = require('gulp-less');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');

gulp.task('clean', async ()=>{
  await del.sync('build');
})


gulp.task('less',async ()=>{
  await gulp.src(['src/**/*.less'])
  .pipe(less())
  .pipe(autoprefixer())
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('build'));
})
gulp.task('default', gulp.series(['clean','less'], async ()=>{
  await console.log(less);
}));

gulp.task('watch', () => {
  const watcher = gulp.watch('src/**/*', gulp.series(['default']));
  watcher.on('change', event => {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
})
