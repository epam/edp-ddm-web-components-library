const fse = require('fs-extra');

// # skip postinstall if npm install for development
// # rollup.config.js is not included in dist
fse.stat('rollup.config.js', (err) => {
    if (!err) {
        console.log("skipping your package's postinstall routine.");
        return;
    }
    console.log('Copying files from dist folder into root project folder...');

    fse.copySync('dist', process.cwd());
    fse.removeSync('dist');
    fse.removeSync('scripts');
    console.log('Postinstall done!');
}); 
    