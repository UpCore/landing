# UpCore
This is the UpCore company official website project.

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
- `master` branch contains latest stable and deployed version of project 
- `master` branch is updated periodically by `develop` branch
    
## Issues
If you find any issues regarding to this page, please submit it in the `Issue`
section of this repo. 