module.exports = {
    hooks: {
        'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
        'pre-commit': 'npx eslint --no-error-on-unmatched-pattern --ext .ts,.tsx,.js,.jsx src test',
        'pre-push': 'npm t'
    }
};
