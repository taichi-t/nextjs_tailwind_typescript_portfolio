---
title: "Moving Sale"
date: "2020-10-18"
tags:
  - reactHook
  - nextJs
  - mongoDB
  - nodeJs
  - semantic-ui

role:
  - Front-end development
  - Back-end development
webLink: "https://moving-sale.vercel.app/"
githubLink: "https://github.com/taichi-t/next.js_e-commerce"
image:
  src: "/images/websites/moving-sale/moving-sale-devices.png"
  alt: "moving-sale with responsive design"
thumbnail:
  src: "/images/websites/moving-sale/moving-sale-mockup.png"
  alt: "mockup moving-sale"
links:
  next:
    src: "/work/impactraction"
    title: "Company's websites"
  prev:
    src: "/work/my-work-space"
    title: "My Work Place"
---

## What is Moving Sale

A platform that enables people to sell and/or buy their stuff 👀

![Screenshot](/images/websites/moving-sale/screenshot.png)

## Features

- User authentication
- Invitation-only
- Leave comments to products
- Save products to your favorites
- Contact sellers via SNS services

## Architecture

![Architecture](/images/websites/moving-sale/architecture.png)

## Technologies

- Installed user authentication with JSON web token to avoid session ID verification with database every request
- Implemented on Next.js and deployed to Vercel with SSG, which reduces critical rendering path in end-users’ side
