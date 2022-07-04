# Hoopa

## Introduction
Welcome to Hoopa, a clone of the popular [Quora](https://www.quora.com/) website. With Quora, you can post questions on whatever you like and other users can answer those questions with their own opinions or facts! Hoopa takes this idea and specializes it to only the subject of basketball. Hoopa is THE website for fans of the game to come and discuess their favorite topics, as well as learn from people who have the knowledge to share. Basketball is a global game that welcomes fans of all kinds.


## How To Start Development Enivornment
1. Use the following command inside of the directory you want the project to be in:
git clone "git@github.com:dchung007/Hoopa.git"
2. Once the project is properly cloned, open it up and create two separate terminals- one cd into the frontend directory and the other cd into the backend directory. 
3. Use the command "npm install" in both terminals.
4. Use the command "npm start" in both terminals to start up the server and access the localhost website version (separate from thr heroku hosted site).

## Technologies Used
- Languages: Javascript, HTML, CSS
- Front-End: React, JSX
- Back-End: Express, Javascript
- Database: PostgreSQL
- Hosting: Heroku

## Link to live site
https://hoopa.herokuapp.com/

## Link to Wiki docs
https://github.com/dchung007/Hoopa/wiki

## Features

### Register/Sign-in
Users can register an account on Hoopa with a unique username and a password of their choosing. They can also sign in with their created username and password. If sign-in credentials are incorrect, error messages will alert the user to try again.

![Screen Shot 2022-07-03 at 8 38 10 PM](https://user-images.githubusercontent.com/84115420/177077550-0516e2f2-98c4-401e-b6c5-b544135fd717.png)

![Screen Shot 2022-07-03 at 8 38 35 PM](https://user-images.githubusercontent.com/84115420/177077650-238fc4f9-d81a-4767-b6f6-249d1962f70f.png)


### View Questions
All users, even those without an account can view any and all questions.
![Screen Shot 2022-07-03 at 8 37 19 PM](https://user-images.githubusercontent.com/84115420/177077478-53812bf6-17c4-4efa-90c9-b1802bd83663.png)

### Creating, editing, and deleting Questions
All logged-in users can create their own questions. They can also edit and delete their questions, but only the ones they themselves posted.
![Screen Shot 2022-07-03 at 8 47 56 PM](https://user-images.githubusercontent.com/84115420/177078198-32ea9fc8-29f8-420a-b731-273790bd4790.png)
![Screen Shot 2022-07-03 at 8 49 44 PM](https://user-images.githubusercontent.com/84115420/177078383-66ebe27f-4151-4f6b-9698-332534f9899a.png)




### Creating, viewing and deleting Answers
All logged-in users can post their own answers on any question. They can also delete only their own answers.
![Screen Shot 2022-07-03 at 8 38 53 PM](https://user-images.githubusercontent.com/84115420/177077711-8468112c-7c3f-43af-b8a7-cdd32738b8a4.png)
![Screen Shot 2022-07-03 at 8 39 05 PM](https://user-images.githubusercontent.com/84115420/177077805-9aec68b3-d2cb-419d-bab4-633a0362aba8.png)

## Future features to implement
- Comment on a specific answer
- Update answers
- Add images to questions

## Challenges Faced
- There were many obstacles I faced, at every stage of the process. I had issues with establishing valid model and migration associations, and had to revise them numerous times whenever I decided to make changes to the data I wanted our website to have. The association were difficult at times because simple foreign key mistakes or an extra character here or there could throw everything off. I had to drop the database, rerun all migrations and seeder files, to solve this issue, as well as update the associations to have the correct foreign keys.
- I also ran into many 404 errors when setting up my two full CRUD features. There were multiple times when my state would not hydrate when I either submitted a form or wanted to load questions/answers. It would only hydrate once I refreshed the page. My initial solution was to simply rehydrate the state manually by disptaching another action. However, upon further review and debugging, I solved this by following the flow of data in Redux. I realized that the reason why my redux state was not updating dynamically was because I was actually passing in the wrong information to the particular thunk (update/create operation) in my react component. As a result, the state was not updating as it should have been. I had to pass in the whole instance of either particular answer/question that I wanted to delete/update.
