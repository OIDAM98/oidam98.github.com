---
title: "#CloudResumeChallenge"
description: Personal website for 
date: "2020-09-11T17:51:52-05:00"
jobDate: 2020
work: [website, cloud, full stack]
techs: [AWS S3, AWS Lambda, AWS Cloudfront, AWS DynamoDB, Node.Js, JavaScript, HTML, CSS, Hugo]
thumbnail: personal_site/thumb.jpg
projectUrl: https://github.com/OIDAM98/resume_website
---

The first edition of this website, only using vanilla **HTML**, **CSS** and **JavaScript** for the front-end with the [Responsive Resume](https://philipcdavis.com/responsive-resume/ "Responsive Resume") theme as a template. The purpose was to learn about different skills that are used in day-to-day software development, like infraestructure as code and serverless.

It was developed for the [#CloudResumeChallenge](https://forrestbrazeal.com/2020/04/23/the-cloud-resume-challenge/ "#CloudResumeChallenge"), using AWS stack for the development of the back-end and the deployment of the site. The site is hosted in **AWS S3** using **Cloudfront** for the distribution with *HTTPS*, while the domain name *oscardealva.com* was bought from **Route 53**. 

A simple record inside **DynamoDB** database was created for the number of visitors that have accessed the website. A **Lambda**, using the **Node.js** runtime, was used to connect to it, using an **API Gateway** to establish an API for the front-end to fetch data from it. All of this was defined inside a *YAML* file to setup **AWS SAM** for automating the deployment. A *CI/CD pipeline* was implemented for both front-end and the lambda using **GitHub Actions**. 

The only parts that are not present from the challenge are the tests for the lambda deployment and the *AWS Cloud Practitioner Certificate* (or more advanced) on the resume. 

Later on, a redesign was made in **Hugo** in order to simplify adding content to the site and exploring a static site generator to create a website. The CI/CD pipelines remained on Github, only changing the one for front-end.