'use strict';

const ghPagesList = [
  'index.html',
  'favicon.ico',
  'public',
].join(' ');

module.exports = {
  'git-is-clean': {
    command: 'test -z "$(git status --porcelain)"  || (git status && false)',
  },
  'git-push-master': {
    command: 'git push origin master',
  },
  'deploy-prepare': {
    command: [
      'git checkout master',
      'git branch -D gh-pages || echo "so not removed"',
      'git checkout --orphan gh-pages',
      'git rm --cached \'*\'',
    ].join(' && '),
  },
  'deploy-publish': {
    command: [
      'touch .nojekyll',
      `git add --force .nojekyll ${ghPagesList}`,
      'git commit -m "deploy task"',
      'git push origin gh-pages --force',
      'git clean -x -d --force --exclude=node_modules',
      'git checkout master',
    ].join(' && '),
  },
};
