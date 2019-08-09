# Chapter 3 Practice with NPM global

## Objectives:
* You will use NPM to install packages globally.

## Steps

1. Navigate to a command window any location, because we are talking about global installs. You can use the shortcut control + ` to bring up the integrated terminal.

1. Use the `npm ls -g` command to see what has already been installed globally. Scroll through the file to get a sense of the structure.

1. Notice a package called `knex` listed. Knex allows your projects to connect to databases. Later this will be used in the chapter on databases.  

1. You can also run this command to see if something in particular is installed globally.

    ``` npm -g ls knex ```

2. Lets say you have installed a package globally that you didnt mean to. For example the package is-odd will tell you just that, if a number is odd. Install this now with:  
    ``` npm -g i is-odd```

3. Check that it is there using
    ``` npm -g ls is-odd ```

4. We can remove packages like is-odd from being available globally by using this command. Try this now:
    ``` npm -g rm is-odd ```

    an alternative command is:
    ``` npm -g uninstall is-odd ```

5. Hit the up arrows to go back and try to list the global entry for is-odd - it should now be gone (listed as -- (empty))
