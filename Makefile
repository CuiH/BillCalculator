deploy:
	rm -r ~/tmp/build
	git checkout master
	npm install
	npm build
	git add --all
	git commit -m "update source"
	cp -r build/ ~/tmp/
	git checkout gh-pages
	rm -r ./*
	cp -r ~/tmp/build/* ./
	cp ~/tmp/CNAME/Bill/CNAME ./
	git add --all
	git commit -m "deploy"
	git push origin gh-pages
	git checkout master
	git push origin master