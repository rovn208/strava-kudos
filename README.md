# strava-kudos

[![Github Actions][github-actions-src]][github-actions-href]
[![Forks][fork-href]][fork-href]

<!-- ![...](.github/banner.svg) -->

By using [Cypress][cypress-href] as an executor, this application will kudo all newest [Strava][strava-href] activities.

✅ Kudos all your newest Strava activities hourly (customizable by changing the [Github action scheduling][github-action-schedule])

✅ Config once, using forever

## 🚀 Usage

### Step 1: Fork this repository

### Step 2: Deploying this project with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fro-vn%2Fstrava-kudos)

Or you can deploy to Vercel manually by following these [steps](https://vercel.com/guides/deploying-nextjs-with-vercel)

Once deployed, you will get a URL to see your app live, such as the following: https://strava-kudos.vercel.app (1)

### Step 3: Change Schedule time (if needed)

This application will kudos all activities on your Newfeed hourly (by default)
If you wanna schedule this execution, change the [cron value](./.github/workflows/strava-kudo.yml#5) of the `strava-kudo.yml` workflow in source code.

You can use [crontab guru](https://crontab.guru/) to help generate your cron syntax and confirm what time it will run. To help you get started, there is also a list of [crontab guru examples](https://crontab.guru/examples.html).

### Step 4: Using Cypress dashboard for debugging/visualization results (Optional)

We are leveraging useful features of the Cypress Dashboard:

[Recording test results with the `record: true` option](https://on.cypress.io/how-do-i-record-runs) to the [https://on.cypress.io/dashboard]:

1.  In-depth and shareable [test reports](https://docs.cypress.io/guides/dashboard/runs).
2.  Visibility into test failures via quick access to error messages, stack traces, screenshots, videos, and contextual details.
3.  [Detecting flaky tests](https://docs.cypress.io/guides/dashboard/flaky-test-management) and surfacing them via [GitHub PR status checks](https://docs.cypress.io/guides/dashboard/flaky-test-management#GitHub).

To using Cypress Dashboard following these [steps]([https://www.youtube.com/watch?v=Oqq-_QZWzhg]):

1. Link github account with [Cypress dashboard](https://on.cypress.io/dashboard)
2. Create a new project
3. Once created, you will get the `projectId` and [record key][github-secret] at (2)
4. Replace `projectId` at [cypress.json](./cypress.json) with your `projectId`

### Step 5: Add environment variables

[Cypress][cypress-href] need some environment variables to run correctly.

To protect our data, we will put it in [Encrypted secrets][github-secret]

The following environment variables should be provided

```
CYPRESS_BASE_URL  // Base URL of your application (1)
CYPRESS_RECORD_KEY // Record key of current project (2)
CYPRESS_STRAVA_PW // Strava's username
CYPRESS_STRAVA_USERNAME // Strava's password
```

Adding these params to repository's secret at `Setting -> Secrets -> New repository secret`

## License

[MIT](./LICENSE)

<!-- Links -->

[fork-href]: https://img.shields.io/github/forks/ro-vn/strava-kudos?style=social
[vn-logo]: https://raw.githubusercontent.com/webuild-community/badge/master/svg/made.svg
[strava-href]: https://www.strava.com/
[github-actions-src]: https://img.shields.io/github/workflow/status/ro-vn/strava-kudos/strava-kudos
[github-actions-href]: https://github.com/ro-vn/strava-kudos/actions?query=workflow:strava-kudos
[github-action-schedule]: https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows#schedule
[cypress-href]: https://www.cypress.io/
[github-secret]: https://docs.github.com/en/actions/security-guides/encrypted-secrets
