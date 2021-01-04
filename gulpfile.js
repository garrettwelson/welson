const { parallel, watch } = require("gulp");

// Import tasks
const sass = require("./gulp-tasks/sass.js");
const fonts = require("./gulp-tasks/fonts.js");

// Assign relevant task to relevant directory
const watcher = () => {
  watch("./src/scss/**/*.scss", { ignoreInitial: true }, sass);
};

exports.default = parallel(fonts, sass);

exports.watch = watcher;
