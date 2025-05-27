# Propeller Software Engineer in Test Challenge (Online)

## Introduction
At Propeller we are all about maps we love maps so much. That you will find them everywhere. So in this challenge we will
write a small algorithm that will help us to compare maps and we will write some tests for one of our public webpages.

https://caniuse.propelleraero.com/

## Background
Commonly large datasets like maps (2D or 3D) are broken down into chunks with varying levels of detail.
You will already be familiar with this concept in e.g. Google Maps, where you can zoom out to see the whole world in low detail.
Zoom in and you can see your house. [This blog post](https://macwright.org/2012/05/15/how-web-maps-work.html) provides a good overview.

## The Challenge

The challenge will be divided into two parts:

### Part 1: Write a Function to Compare Two Maps Using Their Tilesets

Maps are defined by their Tilesets—a collection of TileDescriptor objects. Each TileDescriptor is represented as a
tuple containing three key attributes: x, y coordinates and a zoom level.

To determine whether two maps are identical, we need to compare their Tilesets. Two Tilesets are considered equal if and
only if they contain the exact same TileDescriptor elements.

### Part 2: Write tests for the following webpage: https://caniuse.propelleraero.com/

Let’s dive into writing tests for the webpage https://caniuse.propelleraerp.com/ using the Playwright framework!
Here’s what we’ll focus on validating:

- Page Load: Ensuring the page loads seamlessly and displays correctly.
- Search Functionality: Verifying that the search field operates as expected, returning accurate results.
- Zoom Controls: Testing the zoom buttons to confirm they respond and adjust the view properly.

## Prequisite

- yarn
- node > 20.0.0

## Setup

`yarn install`
