#!/bin/bash

# echo -n "Open Node Server "
# cd ./server


# open -a Terminal.app
# node server.js



osascript -e 'tell app "Terminal"
    cd ./server
    do script "nodemon server.js"
end tell'