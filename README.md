# CS 16X page
For the intro to CS courses at Oregon State University

# Building and running instructions
There are no HTML or CSS files in the directory. This is intentional. All HTML and CSS files are meant to be constructed by compiling down SCSS and PUG files.

In order to build them, you need to first install some node_modules to let *Gulp* get the resources it needs. This is done by using `npm install`

Then the following lines will compile and build all files:  
    * `gulp scss`  
    * `gulp scssHome`  
    * `gulp pug`  
    * `gulp pugHome`  

If you want to modify the code and have it update as you go, simply write a `gulp watch` and it will live update all changes.
