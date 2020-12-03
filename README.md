# _Mandalorian RPG_
### 11.30.2020
## By Ryland Adams, Joseph Giunta, Jerrod Styrk, Taylor Baker, David Sterry, Harrison Strand
## Description 
* _A compelling Stahr Whars themed text based RPG centered around the bounty hunter The Mandalorian. In the console users will be prompted to chose different adventures, progress through levels and fight enemies along the way. Just enter a number that corresponds with the choice you wish to select in the prompt that pops up._

## Software Requirements
* _Internet browser
* _Git Bash_

## Setup 
* _On Github locate my repository link by clicking the green button that says "Code", this will open a drop down menu to allow for you to copy my https://github.com/Pugsly99/Mandalorian-RPG

* _Open Git Bash._ 

* _Change the current working directory to the location where you want the cloned directory._

* _Type git clone, and then paste the URL you copied earlier. here is a example ~ '''$ git clone https://github.com/Pugsly99/Mandalorian-RPG'''_

* _Press Enter to create your local clone._

* _Navigate to the directory you were in when you cloned the repository._

* _open the new file you cloned._

* _In the terminal use the command 'npm install' to install all necessary packages for this project._

* _Now use the command 'npm start' to start a live server_

* _In the live browser open your dev tools and refresh your page_

* _Now follow the prompts listed in the dev tool console, and enter your choice into the prompt box that displays. Enjoy our game._

<details>
  <summary>Note to Apple Users</summary>

    - Under package.json navigate to "scripts"
    - Navigate to "start", the & needs to be replaced with ;
    - Or vice versa for PC users
    Before
    "scripts": {... "start": "npm run build & webpack-dev-server --open --mode development",
    After
    "scripts": {... "start": "npm run build; webpack-dev-server --open --mode development",

  </details>

## Specifications

| Behavior | Input | Output |
|-------------------------------------------------|--------|--------|
| User can enter character name | Han | Han |
| User can choose a class melee/ranged/balanced | ranged | ranged |
| Class choice determines stats | ranged | getstats() |
| Choose from prompts 1.Fight, 2.Run, 3.Search...ect | 1 | Fight |
| Choose from mission type journey/story/bounty | journey | journey |



## Bugs
* none known

## For support
* _rylandadams@yahoo.com_
* _jgnohack@gmail.com_
* _jstyrk@citadel.edu_
* _yao_shmitz17@yahoo.com_
* _sterry.david@gmail.com_
* _harrisonstrand@gmail.com_

## Technologies and tools used

<details>
  <summary>Expand Tech/tools</summary>

- Visual Studio Code
- Html
- markdown
- bootstrap
- css
- jQuery
- javaScript
- clean-webpack-plugin
- css-loader
- eslint
- eslint-loader
- html-webpack-plugin
- style-loader
- webpack
- webpack-cli
- webpack-dev-server
- popper.js
- jest
- babel
- dotenv

</details>

## Legal 
* _This software is licensed under the [MIT] license_
* _Copyright (C) 2020 Ryland Adams, Joseph Giunta, Jerrod Styrk, Taylor Baker, David Sterry, Harrison Strand_