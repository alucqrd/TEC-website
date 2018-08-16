# Ark Labs Landing Page

This repo contains an application that is built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org): **[Demo Link](https://gatsby-netlify-cms.netlify.com/)**.
It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Setup

### Create an app

- Fork this repository on GitHub
- Create a new Netlify account
- Once logged in, add a new application using [this link](https://app.netlify.com/start) where you will authorize GitHub access and select repository you've just created

### Enable Identity and Git Gateway

Netlify's Identity and Git Gateway services allow you to manage CMS admin users for your site without requiring them to have an account with your Git host or commit access on your repo. From your site dashboard on Netlify:

- Go to Settings > Identity, and select Enable Identity service.
- Under Registration preferences, select Open or Invite only. In most cases, you'll want only invited users to access your CMS, but if you're just experimenting, you can leave it open for convenience.
- If you'd like to allow one-click login with services like Google and GitHub, check the boxes next to the services you'd like to use, under External providers.
- Scroll down to Services > Git Gateway, and click Enable Git Gateway. This will authenticate with your Git host and generate an API access token. In this case, we're leaving the Roles field blank, which means any logged in user may access the CMS. For information on changing this, check the Netlify Identity documentation.

### deploy

Last step is to rebuild your application to make sure that git gateway settings from previous step is working correctly. In order to do that, simply go to "Deploys" section in Netlify dashboard, and click "Trigger deploy" button.

Now, you can access CMS panel by browsing to `/admin` path inside your deployed application.

## Access Locally

```
$ git clone https://github.com/vRobM/Ark-Labs-TEC-website.git
$ cd TEC-website
$ yarn
$ yarn start
```

To test the CMS locally, you'll need run a production build of the site:

```
$ yarn build
$ yarn serve
```
