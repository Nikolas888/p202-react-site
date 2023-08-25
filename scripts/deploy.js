const ghpages = require('gh-pages');



ghpages.publish('./build', {
  branch: 'gh-pages',
  repo: 'https://github.com/p202io/p202.io.git'
}, (error) => {
  if (error) {
    console.error(error);
  }
});
