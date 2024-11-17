const path = require('path');

const makeRelative = (files) =>
  files.map((file) => path.relative(__dirname, file));

const lintStagedConfig = {
  '*.{js}': (files) => [`prettier --write ${makeRelative(files).join(' ')}`],
  '*.json': ['prettier --write'],
  '*.md': ['prettier --write'],
  '*.{yml,yaml}': ['prettier --write'],
};

module.exports = lintStagedConfig;
