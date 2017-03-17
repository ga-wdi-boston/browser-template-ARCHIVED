'use strict'

const ghPagesList = [
  'index.html',
  'favicon.ico',
  'public'
].join(' ')

module.exports = {
  'git-is-clean': {
    // `$(git status --porcelain)` will evaluate to the empty string if the
    // working directory is clean.
    // `test -z` will exit 0 (true) if its argument is an empty string.
    // If it doesn't exit true, `(git status && false)` will show why the
    // repository isn't clean and exit false causing the grunt tasks to end.
    command: 'test -z "$(git status --porcelain)"  || (git status && false)'
  },
  'git-push-master': {
    command: 'git push origin master'
  },
  'git-checkout-master': {
    command: 'git checkout master'
  },
  'deploy-prepare': {
    command: [
      'git branch -D gh-pages || echo "so not removed"',
      'git checkout --orphan gh-pages',
      'git rm --cached \'*\''
    ].join(' && ')
  },
  'deploy-publish': {
    command: [
      'touch .nojekyll',
      `git add --force .nojekyll ${ghPagesList}`,
      'git commit -m "deploy task"',
      'git push origin gh-pages --force',
      'git clean -x -d --force --exclude=node_modules',
      'git checkout master'
    ].join(' && ')
  }
}
