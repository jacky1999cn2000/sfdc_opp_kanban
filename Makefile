
install:
	docker run -i --rm -v `pwd`:/usr/src/app -w /usr/src/app node:5 npm install

bash:
	docker run -it --rm -p 8080:8080 -v `pwd`:/usr/src/app -w /usr/src/app --entrypoint="bash" node:5

upload:
	# sync ./build folder with s3 folder, --grant option give everyone access to the content and --delete option will delete non-existing files
	aws s3 sync ./build s3://jz-playground/sfdc_opp_kanban --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers --delete
