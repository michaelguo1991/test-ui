const fs = require('fs');
const path = require('path');
const globby = require('globby');
const filePatterns = ['**/*.md', '!node_modules', '!.vuepress'];

const readFile = async () => {
    const pageFiles = await globby(filePatterns, {cwd: path.resolve('examples')});
    console.log(pageFiles);
}

readFile();
