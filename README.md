# Zoopla Property Listings by Mason Ifejika

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

This script must be run before the project can be started.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. Please Note: An instance of JSON Server will also run on port 3001

### `npm test`

Launches the test runner in the interactive watch mode.

# Zoopla's Requirements (as interpreted by me)

## User Story

**As an** estate agent\
**I want** the ability to view and manage my property listings\
**So that** I can mark specific listings as expired

## Acceptance Criteria

* The agent can view all listings
* The agent can mark an individual listing as expired
* The agent can easily distinguish between active and expired listings
* Each property listing displays an image or photo of the property
* Each property listing displays the number of bedrooms
* Each property listing displays the address
* Each property listing displays the post code
* Each property listing displays a short description of the property
* Each property listing displays the asking price
* Each property listing has a status of either `active` or `expired`

# UX/UI Visuals

When I start any project from scratch, I like to sketch out a basic layout on paper (as you can see here), followed by wireframes and visual designs.

![Desktop and Mobile Paper Sketch](/Zoopla_Listings_Paper_Sketch.png "Desktop and Mobile Paper Sketch")

This is what the application looks like when running in your web browser...

![Desktop and Mobile Screenshots](/Zoopla_Listings_Screenshots.png "Desktop and Mobile Screenshots")

# Features of the Project

* Written using React with Hooks
* Styled with Sass (and CSS3)
* Uses React's Context API and the Provider pattern for state management
* Components are unit tested with Jest and the React Testing Library
* A RESTful API for the listings is available at http://localhost:3001
* When a listing is expired (or re-activated), it updates the local database at "db.json"
* Includes a mobile responsive version, which is activated on devices with a screen width narrower than 480 pixels
* Uses the official Zoopla font and Zoopla purple colour
