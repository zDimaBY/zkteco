let project_folder="dist";
let source_folders="app";

let path={
  build:{
    html: project_folder+"/",
    css: project_folder+"/css/",
    js: project_folder+"/js/",
    img: project_folder+"/img/",
    fonts: project_folder+"/fonts/",
  },
  app:{
    html: source_folders+"/*.html",
    css: source_folders+"/css/style.css",
    js: source_folders+"/js/script.js",
    img: source_folders+"/img/**/*.{jpg,png,svg,gif,ico}",
    fonts:source_folders+"/fonts/*.ttf",
  },
  watch:{
    html: source_folders+"/**/*.html",
    css: source_folders+"/css/**/*.css",
    js: source_folders+"/js/**/*.js",
    img: source_folders+"/img/**/*.{jpg,png,svg,gif,ico}",
  },
  clean:"./"+project_folder+"/"
}

let {src, dest}=require('gulp'),
gulp=require('gulp'),
  browsersync=require("browser-sync").create();
function browserSync(params){
  browsersync.init({
    server: {
      baseDir: "./"+project_folder+"/"
    },
    port:3000,
    notify:false
  })
}

function html(){
  return src(path.app.html)
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}
let build=gulp.series(html);
let watch=gulp.parallel(build,browserSync);

exports.html=html;
exports.build=build;
exports.watch=watch;
exports.default=watch;