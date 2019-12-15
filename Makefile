install:
	npm install
start:
	npx babel-node src/bin/brain-even.js
	npx babel-node src/bin/brain-calc.js
	npx babel-node src/bin/brain-gcd.js
	npx babel-node src/bin/brain-prog.js
	npx babel-node src/bin/brain-prime.js
publish:
	rm -rf dist
	npm publish --dry-run
	npm link
lint:
	npx eslint .
