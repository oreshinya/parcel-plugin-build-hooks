const exec = require('child_process').exec;
const fs = require('fs');
const json = require('comment-json');

module.exports = function(bundler) {
  const jsonPath = `${bundler.options.rootDir}/package.json`;
  const pkgJSON = json.parse(fs.readFileSync(jsonPath, {encoding: 'utf-8'}));
  const options = pkgJSON["parcel-plugin-build-hooks"] || {};

  for (let evt of Object.keys(options)) {
    bundler.on(evt, function(){
      exec(options[evt], function(err, stdout, stderr){
        if (err) {
          console.log(`Error on ${evt} ============\n${stderr}`)
        } else {
          console.log(`Success on ${evt} ============\n${stdout}`);
        }
      });
    });
  }
};
