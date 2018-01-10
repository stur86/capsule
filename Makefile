watch:
	sass --watch scss/:css/

build: build/capsule.min.js build/capsule.min.css

build/capsule.min.js: js/capsule.js
	uglifyjs js/capsule.js > build/capsule.min.js

build/capsule.min.css: scss/capsule.scss
	sass scss/capsule.scss > css/capsule.css
	uglifycss css/capsule.css > build/capsule.min.css