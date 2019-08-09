# Chapter 0: Navigating VSCode, Markdown files 
## Objectives
* Practice with markdown files
* Open preview modes in VSCode
* Practice with course files and VSCode
* Create a WIP directory that is ignored by Git tracking via the .gitignore file.

## Make note of this MAGIC NUMBER (will be needed in exercise):
11

### Estimated Completion Time 
10 minutes

## Overview:
Many web projects and tools today are stored in repositories which make use of markdown files to share information about projects - such as this README.md (ending in the extension `.md`). For example GitHub uses the README.md in the root directory of a repository to display information about the project.

When using VS Code to open `.md` files - the files open in edit mode. In edit mode, special characters are used to indicate the meaning of text and how to display it in Preview Mode, which is how it will also display in browsers. 

There are multiple ways to open markdown files in preview mode in VSCode. You will practice opening and viewing this README.md in different ways to learn about markdown files as we will be using them during class exercises.

You will also create a directory for your work during class called WIP.  


## Part 1 - Viewing Markdown files in Edit & Preview Mode:
1. While viewing this README.md file in Edit Mode in VSCode - an icon is visible in the upper right of the VSCode window - which looks like a rectangle with a dark T in the middle and a magnifying glass. 

    Hover over this icon, it says "Open Preview to the Side". Click this icon.

    Notice that you can now see both source and formatted version side by side. You can choose to click the Explorer icon (by default first one in top of vertical menu) to hide it, giving you more room to compare the open files. Click the icon a couple of times and notice it is a toggle button. 
    
    With both Edit mode and preview mode open in split panes, notice that if you scroll in one, the other scrolls as well. 

1. Compare Edit mode and Preview Mode:

    * Hash marks (#), are used for formatting headings.
        * A single # is heading "level 1" which is biggest, ## is "level 2", slightly smaller, and so on.
    * An asterisk is used for making a bullet.
        * Tabs are used for indentation of bullets.
    * Text can be made bold and red by using `backticks` around words.
    * Every item is numbered as 1, when the markdown file is rendered: in preview mode or in browsers - the numbers will increment correctly.
        * This makes it easy to insert new items or re-order items, without needing to take the time to renumber.

1. Close the formatted view by hitting the X for that window.

1. While clicked into the Edit view of this README.md, hit control-shift-V. This will  open the preview in a new tab. Close the Preview mode.

1. Another way to open the formatted view is by right-clicking the .md file in the Explorer view and choosing Open Preview. 
    * Bring back the Explorer view pane if you have closed it by clicking the Explorer icon 
    * While in Preview mode, if you double-click an area of the file, you will be taken back to the source markdown file for editing. 

1. Another way to view README.md files during the course is to visit the course repository on Github and navigate to the appropriate /Labs chapter folder.

1. For the rest of this exercise, view this file in Preview mode. 

## Part 2 - Practice with Git and discard changes:

1. Ensure the Explorer view is visible, listing the files/directories. Recall to click the icon if the view is hidden. 

1. Understanding the directories
    * The `/Demos` directory will be used for running demos.
    * The `/Labs` directory will be used for instructions and some libraries for the hands-on exercises you will be doing in class. 
    * The `/Solutions` folder houses the solutions
    * You will create a `WIP` directory for your work

        * It is safe to play around and modify these files, because the Demos and Labs folders are tracked by Git. 
        * If you make and save changes to any of these files, the VSCode source control icon (The Y looking icon in the vertical menu strip) will display a number for each file changed. 
        * You can always revert to the original files by clicking this source control icon, and discarding the changes from one or all files. 

1. Making changes to the repository.
    
    a. While viewing this README.md file In Edit Mode (recall you can double click preview to get there), in the space provided below, type in your name.
    
        Your name here -> : 
    
    b. Save this file by clicking the drop-down menu File | Save or by hitting CTRL-S to save. (get used to Ctrl-S if you are nto already it will save you a lot of time.) 

    c. Now that your change has been saved, look at the Source Control icon in the  left-side navigation bar. You should see a number now. 
    
    d. Click on this icon.  This displays a list of files that have been changed. In this case, you should only see one file, this README.md. 
        
    * You can discard changes made in a single file by hovering over the file to reveal a menu, and clicking the circular arrow with the title of "Discard Changes". Hover over README.md and click the Discard Changes. The number should then disappear.  

    * If you end up with many changes, you can discard all changes by hovering over the word CHANGES to reveal a menu on that level, and clicking on the undo icon.

1. Telling Git to ignore files in a directory. 
    
    * Git includes a settings file called `.gitignore`
    * Any files or directories included in this file will not be included when you push changes up to the repository.
    * You will be adding files as you perform labs in the class.  You do not want these changes to be published to the repository.  In order to ensure this, you will create a directory to hold these files.  The GIT directory is in this .gitignore file.

## Part 3 - Use VSCode to create the `WIP` directory:

1. Ensure that you have the Explorer open in the navigation bar.

1. You should see the folder for this course listed. Within this folder you will see the `/Demos` and `/Labs` directories. The name of the folder is what is displayed in bold,  Ex. `901NODEINTRO`, etc.
    
1. Create the `WIP` folder to hold your working files

    a. If need to see files, click on the Explorer icon in the left navigation bar.
    
    b. In the empty space at the very bottom of the list, right-click and choose New Folder.
    
    c. Name the new Folder `WIP` - capitalized. You will be working in this directory for much of the course. 


1. If working on a Lab machine, at the end of class you will be able to zip this directory and transfer it off of the lab machine to preserve your work.

1. Please mark your work as complete. With name tent card if in classroom or by using method for online training. (spreadsheet, status symbol, etc.)

