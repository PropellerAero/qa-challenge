# Propeller Software Engineer in Test Challenge (Online)

## Introduction
At Propeller we are all about maps we love maps so much. That you will find them everywhere. So in this challenge we will
write a small algorithm that will help us to compare maps and we will write some UI tests to validate the functionality of one our public webpages.

Get familiar with this small mapping application as this will be used as part of the challenge.
https://caniuse.propelleraero.com/

## Background
Commonly large datasets like maps (2D or 3D) are broken down into chunks with varying levels of detail.
You will already be familiar with this concept in e.g. Google Maps, where you can zoom out to see the whole world in low detail.
Zoom in and you can see your house. [This blog post](https://macwright.org/2012/05/15/how-web-maps-work.html) provides a good overview.

## Prequisite

- `yarn`
- `node >= 20.0.0`

## Setup

- `yarn install`
- `yarn playwright install`
- `yarn test`
- `yarn test:e2e`

## The Challenge

The challenge will be divided into two parts:

### Part 1: Write a Function to Compare Two Maps
We will write a small algorithm to help us compare maps. Maps can be broken down into squares called tiles and each tile can be represented as a zoom level, y and x coordinates.

### Part 2: Write tests for the following application: https://caniuse.propelleraero.com/
Let’s dive into writing tests for the webpage https://caniuse.propelleraerp.com/ using the Playwright framework!
Here’s what we’ll focus on validating:

- Page Load: Ensuring the page loads seamlessly and displays correctly.
- Search Functionality: Verifying that the search field operates as expected, returning accurate results.
- Zoom Controls: Testing the zoom buttons to confirm they respond and adjust the map view properly.
