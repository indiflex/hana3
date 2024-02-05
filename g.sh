#!/bin/sh

if [ "$#" -eq "0" ]; then
  echo "Input the message!"
  exit 0;
fi;

msg=$1
git add -A
git commit -m "${msg}"

git push
