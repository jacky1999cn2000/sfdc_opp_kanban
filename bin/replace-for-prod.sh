#!/bin/bash

echo "replace-for-prod started..."

# save the pwd("/usr/src/app", see Makefile) + "/app" as prefix
prefix=`pwd`/app

# create an array of files that need to be processed
files=( "/components/App.jsx" "/reducers/opps.js" "/reducers/oppStages.js" "/reducers/users.js" "/reducers/stageFilters.js")

# iterate the files array, the value (file name) can be accessed via $i within the loop
for i in "${files[@]}"
do
	echo "replacing file: " $prefix$i

  # uncomment off prod code
  sed -i 's/^\s*\/\*replace-for-prod-start\s*$/\/\*replace-for-prod-start\*\//g' $prefix$i
  sed -i 's/^\s*replace-for-prod-end\*\/\s*$/\/\*replace-for-prod-end\*\//g' $prefix$i

  # comment off dev code
  sed -i 's/^\s*\/\*replace-for-dev-start\*\/\s*$/\/\*replace-for-dev-start/g' $prefix$i
  sed -i 's/^\s*\/\*replace-for-dev-end\*\/\s*$/replace-for-dev-end\*\//g' $prefix$i
done

echo "replace-for-prod ended!"
