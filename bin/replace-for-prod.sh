#!/bin/bash

echo "replace-for-prod started..."

prefix=`pwd`/app
files=( "/components/App.jsx" "/reducers/opps.js" "/reducers/oppStages.js" "/reducers/users.js" "/reducers/stageFilters.js")


for i in "${files[@]}"
do
	echo "replacing file: " $prefix$i

  # uncomment prod code
  sed -i 's/^\s*\/\*replace-for-prod-start\s*$/\/\*replace-for-prod-start\*\//g' $prefix$i
  sed -i 's/^\s*replace-for-prod-end\*\/\s*$/\/\*replace-for-prod-end\*\//g' $prefix$i

  # comment off dev code
  sed -i 's/^\s*\/\*replace-for-dev-start\*\/\s*$/\/\*replace-for-dev-start/g' $prefix$i
  sed -i 's/^\s*\/\*replace-for-dev-end\*\/\s*$/replace-for-dev-end\*\//g' $prefix$i
done

echo "replace-for-prod ended!"
