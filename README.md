# Hoopa

## Introduction
Welcome to Hoopa, a clone of the popular [Quora](https://www.quora.com/) website. With Quora, you can post questions on whatever you like and other users can answer those questions with their own opinions or facts! Hoopa takes this idea and specializes it to only the subject of basketball. Hoopa is THE website for fans of the game to come and discuess their favorite topics, as well as learn from people who have the knowledge to share. Basketball is a global game that welcomes fans of all kinds.


## How To Start Development Enivornment
Use the following command inside of the directory you want the project to be in:
git clone "git@github.com:dchung007/Hoopa.git"


## Technologies Used
Languages: Javascript, HTML, CSS
Front-End: React, JSX
Back-End: Express, Javascript
Database: PostgreSQL
Hosting: Heroku

## Link to live site
https://hoopa.herokuapp.com/

## Link to Wiki docs
https://github.com/dchung007/Hoopa/wiki

## Features

### Register/Sign-in
Users can register an account on Hoopa with a unique username and a password of their choosing. They can also sign in with their created username and password. If sign-in credentials are incorrect, error messages will alert the user to try again.

### View Questions
All users, even those without an account can view any and all questions.

### Creating, viewing, editing, and deleting Questions
All logged-in users can create their own questions. They can also edit and delete their questions, but only the ones they themselves posted.

### Creating, viewing and deleting Reviews
All logged-in users can post their own answers on any question. They can also delete only their own answers.

## Challenges Faced
There were many obstacles I faced, at every stage step of the process. I had issues with establishing valid model and migration associations, and had to revise them numerous times whenever we decided to make changes to the data we wanted our website to have. I had to drop the database, rerun all migrations and seeder files, to solve this issue.
I also ran into many 404 errors when setting up our two full CRUD features. An example of which is that when we attempted the dynamic edit and delete features for menu items, the page would refresh when we edited a menu item. We fixed this by modifying our front end JS file and added event listeners that would adjust data without refreshing the page.
