![myPexeso](https://user-images.githubusercontent.com/28025554/133909789-0129cb86-baff-478d-93d9-27eb4afe78e2.PNG)
# Pexeso - Memory Game

## Code Institute MS2 Project in Interactive Frontend Development

## About

This is a simple Memory Game Web Application created for my second Milestone project with Code Institute. The game is designed to test a user's memory and is made up of a deck of cards, each card containing an image assigned randomly. The goal is to click on a card to reveal the image behind it, memorise the card containing that image and match cards with similar images until all pairs are matched.

## What is the goal of this challenge.

The goal of this challenge is to match all the cards in as little time as possible, making the fewest selections possible.


## UX

**STRATEGY**
**Who is this memory game for?**

* People who wish to improve their memory skills in any age groups.
* People who wish to improve their concentration skills in any age groups.
* People who wish to take a small break. 

**Ideal users for this website:**

* Ideal users for this website are students or young professionals seeking a small break for a short online game.

**These users are looking for:**

* Entertaining and short online game.

**Project goals**
**USER STORIES**

**Comon user stories**

1. As a player, I want to play a game that involves using my memory so that I can improve my memory skills.

* The main purpose of the game is to improve memory skills, player can play the game in the play section.

2. As a player, I want to know how playing memory games can improve memory skills.

* Information about the benefits of playing memory games can be found in the about section.

3. As a player, I want a mobile friendly game to play whilst on the go via my mobile phone/tablet.

* Application is fully responsive thanks to bootstrap framework and mobile first design approach.

4. As a player, I want a game that is intuitive and easy to use so that I can learn how to use it quickly.

* The game is very intuitive to use. As addition player can find how to play info in about section.

5. As a player, I want to see my score so that I can see if I am making progress.

* Users can keep track of their score by watching the timer, turn count and points while they're playing the game, and see their best scores in best score section in the game.

6. As a player, I want a fun game that will attract my kids to play and help with their memory skills.

* Game has a Lego theme so the kids will love to play. It also has difficulty levels so will suit all ages.

7. As a player, I want to play the game that me remind me the old fashion memory game called "pexeso".

* Game has the old fashion images of the original "pexeso" images specially designed for older generation players.


**New users**

1. As a new player, I want a short online game.

* Game is designed for a short online game. It can be played anytime for a small break for funn.

2. As a new player, I want to be my game attractive.

* Game is designed for all age groups who would like to improve or test their memory skill and have a fun at the same time.

**DESIGN**
**Structure**
**How to Play:**

1. Open the [Pexeso](https://mirofrankovic.github.io/m-game-ms2/)
2. To follow all instructions, press the **About** button where you will find instructions for your game.  
![about](https://user-images.githubusercontent.com/28025554/133907945-f8465ec6-947b-4c9a-925e-371b6bdbdf0f.PNG)
3. To enter the game press **Play** button where you will find two options for hard level with 16 cards and easy level with 8 cards.
![levels](https://user-images.githubusercontent.com/28025554/133908122-e969c510-a680-4a3d-8980-ddcc433a9396.PNG)
4. Finally you will be able to see the main board with cards.
![mainboard](https://user-images.githubusercontent.com/28025554/133908226-7dfc39b0-3379-4e69-ac13-8850811474f6.PNG)

* When a pair of cards have been matched, they are no longer displayed in the grid of cards.
* The countdown timer starts to count down from 60 seconds when the game begins.

**WIREFRAMES**

**Sceleton** 
![titlePexeso](https://user-images.githubusercontent.com/28025554/133854242-7c071d1e-75ed-4295-ac25-e830a6c95183.PNG)

**Surface**

The look and feel of Pexeso was inspired by a classic game with retro style cards playing on the table. Now, I would be able to create a same style game with the same images I have used to play with friends on the table.

## FEATURES

**Existing Features**

**Start Game Screen**: This is the first screen presented to the user. The user is prompted (with onscreen text instructions) and then click the 'Play!' button to start the game.
![gametitle](https://user-images.githubusercontent.com/28025554/133905477-9b0af47a-bb55-4ac6-93ce-021c3f3d2bd2.PNG)


**Main Game Board**: The gameboard displays 16 cards for hard level or 8 cards for easy level (with the backs of the cards visible to the user). The game timer on the top left of the gameboard counts down from 60 seconds. When the user clicks on a card, the card turns and the picture side of the card is presented.
![gameboard](https://user-images.githubusercontent.com/28025554/133905148-a36dfb55-e717-4b03-b339-767f8fdcd3a5.PNG)


## TECHNOLOGIES USED

In the construction of this project I have utilised the following languages, frameworks, libraries and tools:

* **HTML**, **CSS** and **Java Script** programming languages.

* [Bootstrap v5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
* The project used Bootstrap to simplify the website layout by integrating the Modals for further artist info and the Cards for event listings and company info.
  Also to provide overall responsive behaviour on all devices.

* [GitPod](https://www.gitpod.io/)
* I used **GitPod** as the development environment for my website. I also used Git for Version Control in the project.  

* [GiHub](https://github.com/)
* The project used **GitHub** to host my code that was created and pushed from GitPod.

* [Balsamiq](https://balsamiq.com/)
* I used **Balsamiq**, the rapid low-fidelity UI wireframing tool during the prototyping phase to structure the website and its content following best UX practices.

* [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/)
* **Chrome Dev Tools** was used to consistently test the site and run reports from Lighthouse.

## TESTING

**VALIDATION**

I used the [W3C Markup Validation Service](https://validator.w3.org/) to check the [Markup and W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) to check the CSS validity of the site.


* I constantly tested the code in [Chrome Dev Tools](https://developer.chrome.com/docs/) and often ran Lighthouse audits to identify and fix issues that affected the site's performance, accessibility and user experience.
![devtools](https://user-images.githubusercontent.com/28025554/133907184-01b38238-b559-44e3-a2be-ae34663da139.PNG)

In order to have optimal user experience, the site needs to be accessible. I would continually run the URL through WAVE Web Accessibility Evaluation Tool to highlight potential issues. I continued until no further errors were given.

## DEPLOYMENT

This site is hosted using GitHub pages, deployed directly from the master branch.
The deployed site will update automatically upon new commits to the master branch.
For the site to deploy correctly on GitHub pages, the landing page must be named index.html.

**LOCAL DEPLOYMENT**

To run locally, you can clone this repository directly into the editor of your choice by using the following command:
```
git clone  https://mirofrankovic.github.io/m-game-ms2/
```
To cut ties with this GitHub repository, type:
```
git remote rm origin
```
into the terminal.

My project was developed using the IDE, Gitpod. I deployed my website from the GitHub repository to GitHub Pages using the following steps:

1. I selected the Settings tab in my GitHub repository.
![seaveddep](https://user-images.githubusercontent.com/28025554/133906560-63f3621b-ae4d-4dcf-ab21-c4f7947d40ca.png)

2. I located the GitHub Pages section and chose the Main branch as the source to enable GitHub Pages.
![locationgith](https://user-images.githubusercontent.com/28025554/133906768-45dfc905-13eb-4dd3-9038-b4a6015bd2a3.png)

3. Once I saved the Main Branch as the source, the page refreshed and I located the URL to the deployed website.
![gitpagess](https://user-images.githubusercontent.com/28025554/133906918-ad797236-a3d1-4f43-9d58-fe24f6d4b37d.png)

4. I then followed the link to observe and verify the published GitHub page.
![mypages](https://user-images.githubusercontent.com/28025554/133907094-8202ae82-2152-4176-b172-b59c5766f3ed.png)

## CREDITS

The source for my website I was using from credible website such as [Pexeso](https://www.pexeso.net/nejstahovanejsi?pg=6).

## Content

By pressing the **Credits** button on the start game screen you will be able to see the content of my project.
![content](https://user-images.githubusercontent.com/28025554/133908513-841d52e2-1cf2-48b6-89fc-b8c18beb919f.PNG)

