# Feed Reader Testing

This project is a part of Front End Web Developer Nanodegree program powered by Udacity and Google  - how to test an RSS Feed Reader JavaScript
application using the [Jasmine](https://jasmine.github.io) framework.

## Table of Contents

- [Background](#background)
- [Installation](#installation)
- [Tests Included](#tests-included)

## Background

The application being tested is an [RSS Feed Reader provided by Udacity]
(https://github.com/udacity/frontend-nanodegree-feedreader). 

My repository is :
(https://github.com/gsarajlic/frontend-nanodegree-feedreader.git)


## Installation

After downloading repository, please  unpack it and run index.html file. After you run index.html 
tests will be automatically ran and on the bottom of the page they will be shown.

## Tests Included

The tests included are the following, and all of them are containted in feedereader.js file in folder jasmine\spec:

### RSS Feeds

* Ensure that the RSS feeds are defined.
* Ensure that each feed has a defined, non-empty URL.
* Ensure that each feed has a defined, non-empty name.

### Menu

* Ensure the menu is hidden by default.
* Ensure that clicking on the menu icon shows the menu.
* Ensure that clicking on the menu icon again hides the menu.

### Initial Entries

* Ensure that each feed contains at least one feed entry.

### New Feed Selection

* Ensure that switching to a new feed actually changes the content.
