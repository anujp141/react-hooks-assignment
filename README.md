# Options for starting this assignment:

## Method 1: Cloning and Pushing to Your Own Repository
This method will provide you with a React project that has a lot of the work already done for you. If you want to primarily focus on writing callback functions that manipulating state and call react hooks rather than styling and building a view with JSX, choose this method. If you want a more hands-on, realistic approach, try Method 2.
1. Fork this repository by clicking the "Fork" button in the top right corner of this page. This will create a copy of this repository in your GitHub account.
2. Clone your forked repository to your local machine using the following command in your terminal:
    - `git clone https://github.com/your-username/react-hooks-assignment.git`
    - Replace `your-username` with your GitHub username.
3. Run the following commands to install the dependencies necessary for React to work and to start a local development server:
  ```
  npm install
  npm run dev
  ```
4. Make changes to the files in your local repository as directed in the exercises.
5. After making changes, add, commit and push your changes to your remote repository using the following commands in your terminal:

```
git add .
git commit -m "Add changes as directed in the exercises"
git push origin main
```

Replace `main` with the name of the branch you want

## Method 2: Creating a React Project using VITE
This method is a more realistic approach to starting a react project and we strongly encourage you to give it a try since it gives you a more hands-on approach to the React/Vite creation process.
1. Using your terminal, change your directory to a location where you are comfortable storing your React assignment
2. Next, run the following command to create a Vite project (replace your-project-name with the name of your project):
```
npm create vite@latest your-project-name
```
3. Using the arrow keys, navigate to where it says React and press enter
4. Using the arrow keys, navigate to Javascript and press enter
    - Note: If you are using Git Bash, interactive CLI may not work. Try redoing this from another terminal such as the one in VScode
5. Run the following three commands to change directory into your new React project, install local dependencies, and start a local development server
```
cd your-project-name
npm install
npm run dev
```
6. Make changes to the files in your brand new project as directed in the following instructions.
7. After making changes, initialize your project as a git repository with `git init` and follow the instructions to add, commit, and push it to a new repository on Github

# React Scoreboard App Assignment featuring Hooks!
We are going to make an App that uses hooks in React to allow users to add a series of 'Player' components and let them adjust their scores by clicking buttons.
These will all be contained within a ScoreBoard component which will have an input and a submit button that lets the user add as many players as they want.

## Prep:
Inside `App.jsx` import and 


## Component 1: Create the ScoreBoard component
This component will have a state that holds objects related to the individual players we want to keep track of. It should have an input and a button.
Upon pressing the button, a Player component with the name equal to the text currently in the input 
1. Create a new file named "ScoreBoard.jsx".
2. Inside "ScoreBoard.jsx", import React and any necessary dependencies (e.g. useRef, useState, and optionally bootstrap if you downloaded it).
3. Define a functional component named "ScoreBoard". Make sure to export it so App.jsx can start rendering it to the user
4. Make sure to create a state to keep track of players and either another state or ref to keep track of the user input
5. Add the necessary JSX code to create the ScoreBoard layout, including a title, input field with a button, and an area to render the players (try mapping through the player array state and rendering a Player component for each one, passing the appropriate props).
6. Add a function that will update our players state by adding a new player with the name currently in the input field and a unique id (Date.now() is a good option)

## Component 2: Create the Player component

1. Create a new file named "Player.jsx".
2. Inside "Player.jsx", import React and any necessary dependencies (useState).
3. Define a functional component named "Player". Make sure to export it and ensure that `ScoreBoard.jsx` is importing it
4. Make sure that you are successfully receiving props (which should only be name) from ScoreBoard
5. Create a new state called score and 2 callback functions:
    1. Increment - a function that adds 1 to the current score state
    2. Decrement - a function that subtracts 1 from the current score state
6. Write the necessary JSX code to create the layout for an individual player component. This should include place for the player's name, a place to display the player's score, and 2 buttons for adding and subtracting points from that player


## BONUS CHALLENGE:
Can you figure out a way to add the ability to delete players from your ScoreBoard? Refer to the React 2 slides for hints ;)