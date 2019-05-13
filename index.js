const fse = require("fs-extra");

fse.removeSync("build");
fse.mkdirSync("build");
fse.copySync("a/b", "build");
