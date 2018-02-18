# eecs-330-project

### Getting Started
The following general procedures will be helpful in successfully working on and contributing to any repository with multiple contributors.

1. Opening a new branch 
   * To open a new branch using the command line cd to the working directory of the repository on your machine and run the following command `git checkout -b <name>.<what_you_are_working_on>` where <name> refers to your name and what_you_are_working_on refers to the main purpose of the branch that you are starting. For example, if John planned on working on the home page and he wanted to open a new branch he would run the following  `git checkout -b john.home_page`
   * To switch between branches simply run `git checkout <name_of_branch>`
  
2. Pushing changes from your machine up to Github 
   * Once you are ready to commit changes that you have made on your computer to github you start of by adding the files that you want to commit to the list of files being staged for the commit. To do this you can run either `git add *` which will stage all modified files to be commited, or `git add <file_name>.<file_type>` which will only stage the file specified. After that you can run `git commit -m "notes about the commit."` to commit the modified files. Finally, once all of the changes have been commited you can push the commit up to github using the command `git push`.
   
3. Retrieving the most recent version of the github repository
   * To get the most recent version of the github repository from Github to your computer simply run the command `git pull`, however, be aware that you cannot run this command if you have files that have been modified but are unstaged.
   
4. Checking for the current working branch and or seeing the files you have modified since your last commit or pull
   * Run `git status` to see the current working state of the branch on your machine. 
   
5. Making a new Pull Request (PR)
   * If you think the branch you are working on is ready to be merged into master you can open a PR which will allow other contributors to review your code and either approve or demand changes before the branch can be merged. The easiest way to open a new PR is to go to the repository on Github, open the branches tab, and click on the "New Pull Request" button for that specific branch. Write a detailed summary of the work done on this branch. Once the material has been approved you can merge the branch into master. 

### General Guidelines to Follow While Developing
1. Since this is a mobile app make sure to use the responsive tools that Chrome offers
2. Always work on a separate branch and commit your changes to that branch. When you are ready to merge with master submit a pull request and wait for peer review before making the final merge.
  * **NEVER MERGE DIRECTLY TO MASTER**


### Part 1
Screens we need to build: Home, Log, Stretch
Footer on all screens with Home, Log, and Stretch tabs
For Body: using images of front and back and have toggle button to switch between
Home Screen:
  1. Body heat map of user
  2. Underneath body have buttons for "Previous workout" and "Pain History"
Stretch Screen:
  1.Scroll through options for lower back pain- integrate from YouTube
Log Screen:
  1. Two initial options: "Log Workout" and "Log Pain"
  2. User clicks "Log Pain"
  3. Taken to new screen with body map and header "Tap area of pain"
  4. Comment box underneath body: Add details (This is mostly for user's Pain History and doesn't impact search results)
  5. Taken to stretch screen.

Roles: Jeff- log screen, Judy & Emma- Body map/home page and footer, Zack- Stretch screen
