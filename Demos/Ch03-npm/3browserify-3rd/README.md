# Demo Chapter 3 - Browserify Demo
## Overview: Follow the steps to see Browserify in action

1. Recall the benefits of modules. In this project, we want to use modules in the browser. This is NOT supported, browsers do not understand CommonJS and the use of require. So we must first convert from modules to javascript understood by the browser.

1. Look over the `index.js` file. Which modules are being require-d? What is local and what is a 3rd party module?

1. Look up the usage of `arr-union` by web searching for `npm arr-union`

1. Read the package.json file - what are the dependencies?

1. To get the dependencies: `npm install`

1. Open `package-lock.json`. Thsi file contains information about modules depending on other modules, and tracking the versions. Search this file (Control + F) and look for `readable-stream` what version(s) are beig used in this project?

1. Find the scripts object in package.json.

1. Scripts are a great way to shorten our commands at the command line, allowing us to call programs passing in a variety of arguments. You can execute scripts by using `npm run script-name`. There are some commonly used script values, and you can create your own. 

    `build`: a commonly used script to perform tasks such as converting ES6 to ES5 using tools like babel, pre-processing SASS/LESS files to CSS, or doing other setup work to build our project.

    `start`: a commonly used script to start a server, execute a program 

    `test`: used to execute automated testing scripts


1. Notice the build value in this project calls the browserify program passing the input and output file.
  `  browserify index.js -o bundle.js `

1.  Execute this from the command line using
    
    ```
        npm run build 
    ```


1. Notice the creation of the dist directory. Look at the generated `/dist/bundle.js` file.

1. Examine the contents of `combine-arrays.html`.

1. Add the VSCode extension Open in Browser - if not already added. Author is TechER, refresh VSCode.

1. Load the `combine-arrays.html` in the browser by right-clicking and choosing open in default browser - set the browser to Chrome.

1. Do you see the correct results?
