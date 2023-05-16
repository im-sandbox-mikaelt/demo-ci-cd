# CI/CD

Demo repository for using GitHub Actions in a CI/CD context.

:bulb: To control cost and complexity, the demo does not as of now deploy any code to a cloud environment. The main aim is to show additional CI/CD capabilities using GitHub Actions syntax. 

- :exclamation: **This is a template repository**
- :exclamation: **This demo contains GHEC/GHES-specific features**
  - The **Environments** feature is only available for GHEC, GHES (>=v3.1), and public repositories
- **If you have a GHEC organization available**, then please click ***Use this template*** to clone the repo into that organization
- **If you do not have a GHEC organization available**, please run the demo in this repository. Just make sure to complete the **Cleanup** steps afterwards :house_with_garden:

## Usage 

### Trigger CI 

1. Walk through the CI workflow and explain the CI capabilities and syntax (linting, build matrix, ...)
1. Make a change e.g. add a new file or make a change to an existing test file
1. Commit the change to a new branch
1. Create a new PR
1. Observe the CI workflow triggering

### Trigger CD 

1. Walk through the CD workflow and explain the CD capabilities and syntax (environments, concurrency, ...)
1. Merge the PR
1. Observe the CD workflow triggering
1. Show the deployment history for the repository

### Branch protection rules

1. Go to repository **Settings** --> **Branches**
1. Show how specific jobs can be added as branch protection rules to a branch
    - Add a new rule e.g. for `main` where e.g. the `lint` job is required to pass

### :house_with_garden: Cleanup

1. If the workflow was run in this repository, perform the following steps:
    - Delete any branch protections rules created
    - Ensure any PRs created are closed/merged

