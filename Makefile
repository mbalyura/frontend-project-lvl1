install:
	npm install
start:
	npx babel-node src/bin/brain-calc.js
publish:
	npm publish --dry-run
	npm link
lint:
	npx eslint .
