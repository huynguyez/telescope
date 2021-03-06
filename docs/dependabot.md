# dependabot and telescope

Telescope uses dependabot to check outdated dependencies and generate PRs to update dependencies. Currently, dependabot checks 3 `package.json` files in `/`, `/src/web`, and `/tools/autodeployment` respectively. For more information such as PR schedule or limitation, please check [dependabot.yml](../.github/dependabot.yml)

## How to handle dependabot PRs

When you see a PR generated by dependabot, here is what you can do as a reviewer.

1. Read the CHANGLOG.md or release note of this dependency to have a basic understanding of this update.
2. Pull the PR to your local, install the new version of dependencies.
3. Run `npm test` to see if the update fails any test.
4. Run the project (see [environment-setup.md](environment-setup.md)) to see if the update breaks anything

If the update fails the test or break the project (e.g. cause unexpected changes), here is what you can do,

1. Leave a comment in the PR and describe what you saw. (e.g. which test fails)
2. Pull the PR to your local, update the code to fix the problem, and push new commit to the same branch.
3. If the issue is hard to fix, please also leave a comment to discuss your thought with other reviewers.
