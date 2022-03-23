## Infrastructure

The app deploys to Google App Engine

Concept: 

The node modules are installed, Jest unit tests ran, and storybook static content created on the github runner and files are pushed to GCP storage bucket where they're sourced in CloudBuild for the image that deploys to GAE

CICD is captured in the `.github/workflows/` for their respective branch/environment

Each workflow targets a specific GAE configuration file for it's respective service

 * Environments
   * branch/review - iposs-appengine-review
     * `iposs-appengine-review.yaml`
   * branch/main - iposs-appengine-prod
     * `iposs-appengine-prod.yaml`


## Storybook server
Before first run be sure to generate test coverage data using `npm run test:generate-output`

Run `npm run storybook` for the [Storybook](https://storybook.js.org/) server.

While Storybook is running, Run `npm run loki test` for [Loki](https://loki.js.org/) regression checking.

## Compile the deliverable

To compile and publish a new version locally:
* Create a Github access token with package:write access
* Copy it into your per-user ~/.npmrc file as `//npm.pkg.github.com/:_authToken=TOKEN`, or create the file automatically with the `npm login` command.
* Increment the version in projects/stories/package.json (NOT the root package.json)
* Run `npm run publish` to compile and upload.


## Deployment
The CICD pipeline will be automatically triggered via Github actions by any successful pull requests to the Review or Production branches. Merely pushing to those branches will not trigger the pipeline, a pull request must be opened and closed successfully.  
The pipeline for the Main branch will trigger a package build only if the version number in the stories project package.json has been incremented.

## Full process for a UI Library deployment
Note: This deployment process is currently expected to be done every monday by 3pm EST.
* Bump version in projects/stories/src/libraryVersion.ts
* Document new features (under new version) in projects/stories/src/lib/readme/readme.component.html
* Verify stories reflect correct status 🐔
* Bump version in projects/stories/package.json to facilitate a new package
* In Github (or from the command line) create a new release against a new tag equal to the version referenced in libraryVersion.
* Open and approve a pull request from develop to review
* During monday code review open a pull request from review to main and tag someone other than yourself as a reviewer. Review commits, and if acceptable reviewer will approve the pull request.
* When all jobs have completed successfully notify QA and project stakeholders.

## Documentation server

Run `npm run docs:serve` for the [Compodoc](https://compodoc.app/) server.

## Running unit tests with Jest

Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).

## Running end-to-end tests

Run `npm run cypress:run` to execute the end-to-end tests via [Cypress](https://www.cypress.io/), though at the moment it is unclear what those tests might target (the Storybook server perhaps?).

## Linting
Run `npm run lint:all` to run ESLint against all `.js`,`.ts` files in the project.  
To automatically apply fixes, run `npm run lint:all -- --fix`.  

NPM scripts exist also exist to target `sandbox` and `stories` individually, `npm run lint:sandbox` and `lint:stories`.

A base `.eslintrc.json` file exists at the root of the repo that projects can extend.

### IntelliJ ESLint config
To set up IntelliJ to for `.eslintrc.json` files:
- open `preferences`
- go to `Languages and Frameworks` -> `Javascript` -> `Code quality and tools` -> `ESLint`
- check the option for `automatic ESLint configuration`



