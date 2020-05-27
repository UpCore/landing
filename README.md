[![Build Status](https://travis-ci.com/UpCore/webpage.svg?branch=develop)](https://travis-ci.com/UpCore/webpage)

# UpCore
This is the UpCore company website project repository.

We offer comprehensive web apps services, using cutting edge technologies.
Furthermore, we are strongly supporting Startups and Open Source projects.

## Tech Stack - JAMStack
- Gatsby
- TypeScript
- SCSS
- Jest
- Travis CI
- Firebase

## Installation
1. Install latest LTS npm (recommended via nvm)
2. Install Gatsby globally `npm install -g gatsby-cli`
3. Clone repository
4. Go to repository folder
5. Install all required dependencies `npm i`
6. Run project on local server
    * Development build `npm run start`
    * Production build `npm run serve`
    
## Work Flow
- New features and bug fixes should be made as separated PR on new branches.
- New branches should be created from the `develop` branch
- Branch name should start with proper type:
  * `feature/<ticket_number><name>`, 
  * `issue/<ticket_number><ticket><name>`
- Each PR to `develop` branch needs to pass `Travis CI` build before merge.
- `master` branch contains the latest stable and deployed version of project 
- `master` branch is updated periodically by `develop` branch

## Issues
If you find any issues regarding to this page, please submit it in the `Issue`
section of this repo. 

## Deployment
- Deployment process is automated through [Travis CI](https://travis-ci.com)
- New version is deployed after merging `develop` branch to `master`
- In some cases, app can be deployed manually through Firebase CLI by authorized users

<sup>In the future this process should be expanded with versioning by tags</sup>

## Links
1. Check this code in action - visit our [UpCore website](https://upcore-landing.web.app)