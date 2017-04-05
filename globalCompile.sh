#!/bin/bash

#global compiler for scss and jade/pug files

locations=(TABios assignments calendar labs syllabus recitations links clubs)

#if there is no argumets
clear
if [ $# -eq 0 ]; then
    echo "Compiling all files for standard viewing..."
    
    for path in ${locations[@]}; do
        echo -e "\n\n$path PUG: "
        pug -P $path/$path.pug
        echo "$path SCSS: "
        scss $path/$path.scss $path/$path.css
    done
    
    echo -e "\n\nmain PUG: "
    pug -P index.pug
    echo "main SCSS: "
    scss main.scss main.css
elif [ $# -eq 1 ]; then

    if [ $1 == "clean" ]; then
        echo "Removing all .map.css and .sass-caches..."
        
        if [ -e .sass-cache ]; then
            echo "removal of .scss-cache: "
            rm -rf .sass-cache
        fi
        if [ -e *.map.css ]; then
            echo -e "removal of .map.css: "
            rm *.map.css
        fi

        for path in ${locations[@]}; do
        
            if [ -e $path/*.map.css ]; then
                echo -e "\n\n$path removal of .map.css: "
                rm $path/*.css.map
            fi
            if [ -e $path/.sass-cache ]; then
                echo "$path removal of .scss-cache: "
                rm -rf $path/.sass-cache
            fi
        done
        
    else
        echo -e "\n\nmain PUG: "
        pug -P index.pug
        echo "main SCSS: "
        scss main.scss main.css
        echo "Compiling specific directory $1..."
        echo -e "\n\n$1 PUG: "
        pug -P $1/$1.pug
        echo "$1 SCSS: "
        scss $1/$1.scss $1/$1.css
    fi
fi