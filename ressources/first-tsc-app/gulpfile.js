const gulp = require("gulp");
const ts = require("gulp-typescript");

gulp.task("default", () => {
  return gulp
    .src("src/main.ts")
    .pipe(
      ts({
        noImplicitAny: true,
        outFile: "main.js",
      })
    )
    .pipe(gulp.dest("dist"));
});
