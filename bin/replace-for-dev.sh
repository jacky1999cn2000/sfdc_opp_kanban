#!/bin/bash

echo "replace-for-dev started..."

prefix=`pwd`/app
files=( "/components/App.jsx" "/reducers/opps.js" "/reducers/oppStages.js" "/reducers/users.js" "/reducers/stageFilters.js")

for i in "${files[@]}"
do
	echo "replacing file: " $prefix$i

  # uncomment dev code
  sed -i 's/^\/\*replace-for-dev-start$/\/\*replace-for-dev-start\*\//g' $prefix$i
  sed -i 's/^replace-for-dev-end\*\/$/\/\*replace-for-dev-end\*\//g' $prefix$i

  # comment off prod code
  sed -i 's/^\/\*replace-for-prod-start\*\/$/\/\*replace-for-prod-start/g' $prefix$i
  sed -i 's/^\/\*replace-for-prod-end\*\/$/replace-for-prod-end\*\//g' $prefix$i
done

echo "replace-for-dev ended!"
