#! /usr/bin/bash

# for d in "$(cat v2/picture.svg | sed 's/d=\"[^\"]+\"' )";
# do
#     echo $d
# done

p="$(cat v2/picture.svg | grep -Eo 'd="[^"]+"' | cut -c 3-)"

echo $p > output.txt
