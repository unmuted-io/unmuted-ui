#!/bin/bash
osascript <<EOD
  tell application "Terminal"
    tell application "System Events" to keystroke "t" using command down
    do script "cd ~/Documents/scope/scope-it && code . && bash start.sh" in tab 1 of window 1
  end tell
EOD

cd ~/Documents/scope/scope-api && code . && bash start.sh