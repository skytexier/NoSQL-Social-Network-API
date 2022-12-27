# NoSQL Social Network API

 The languages/technologies used in this project include JavaScript, Sequelize, MySQL, Express, Handlebars, BCrypt and Boostrap.

 The intention behind building this project was to create a unique(ish) app that allows users to create an account, sign in, create posts and upvote posts. We aimed to create an "safe-space" where users could only upvote posts.

 For future development we would like to implement more filters on user posts, allowing users to filter through posts depending on their "type" or category as well as the ability for any user to delete another user's post if it reaches a certain critera of downvotes.

 At the moment we've only implemented searches for specific users, upvotes and so forth. If given more time we'd integrate the delete options and the downvote options as well as user tags. Similarly we'd like to flush out the "attached" links to user posts, allowing them to post any sort of media without a specific URL for videos or images alone.

 The main challenge with this project was time; with little less than two weeks we focused on what would make our application function on a barebones level. In this case that included GET/POST routes, the ability to update posts based on an upvote function and so forth. 

 Group 1 Members:

* Braxton Minkey
* Sky Texier
* Ishi Anand
* Khiem Phung

## Table of Contents
- [Usage/Examples](#usage)
- [Installation process](#installation-process)
- [Technologies](#technologies)
- [Screenshots](#screenshots)
- [Deployed Project](#deployed-project)
- [Sources](#sources)


## Usage

For a user to post they first need to login, thus if they dont have an account already they will need to create one. Afterwards a user will need to login with said account for their user-card to display. From this card a user can create a post, include images/video links (video links only work with youtube links at the moment!).
A user can also upvote any post, including their own (planned development to make users only upvote once on their own post and others).

Users can also search for other users with the search bar in the navbar. They need to specify the username to see all posts from said user.

A user cannot delete posts at the moment, however this is another planned feature.

## Installation process
For local use, this project requires the following steps: 
 * Create a .env file
 * Within your terminal run the command `npm i` to install the necessary packages
 * Use the "schemal.sql" file within your MySql Workbench as a Query
 * Run the command `node seeds/index.js` in your console
 * To start the server run the command `nodemon index.js`
 * Check your local `http://localhost:3001/` page

Otherwise the application is deployed on Heroku and runs of a remote database!

 
## Technologies

We created this project within the HTML, CSS, and JavaScript languages. We also used moment.js, node.js, and mysql within the confines of the project.

We also used the following additions:

* [Handlebars](https://handlebarsjs.com/)
* [Nodemon](https://www.npmjs.com/package//nodemon)
* [Bootstrap](https://getbootstrap.com/docs/5.2/utilities/positi)
* [Font Awesome](https://fontawesome.com/)
* [Bootswatch](https://bootswatch.com/quartz/)
* [get-video-id](https://www.npmjs.com/package/get-video-id)- new technology we used



 ## Screenshots
* Screenshot 1: Home Page (no user logged in) 

![App Screenshot](/public/assets/screenshots/screenshot1.JPG)

* Screenshot 2: Login Page

![App Screenshot](/public/assets/screenshots/screenshot2.JPG)

* Screenshot 3: Signup Page

![App Screenshot](/public/assets/screenshots/screenshot3.JPG)

* Screenshot 4:  Home Page (user logged in) 

![App Screenshot](/public/assets/screenshots/screenshot4.JPG)

* Screenshot 5: Logout Page

![App Screenshot](/public/assets/screenshots/screenshot5.JPG)

* Screenshot 6: Searching a user and populating a page with their posts

![App Screenshot](/public/assets/screenshots/screenshot6.JPG)

* Screenshot 7: Create a post Page

![App Screenshot](/public/assets/screenshots/screenshot7.JPG)


# Deployed Project

* [Repository](https://github.com/BrackyM/UCBC_SafeSpace)
* [Live Site](https://the-safer-space.herokuapp.com/)

 # Contributors

* [Sky Texier Github](https://github.com/skytexier)
* [Braxton Minkey Github](https://github.com/BrackyM)
* [Khiem Phung Github](https://github.com/phungxkhiem)
* [Ishwardeep Github](https://github.com/ianad389)
 


 
