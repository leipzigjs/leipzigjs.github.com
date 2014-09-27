build:
	node_modules/wintersmith/bin/wintersmith build -C src

server:
	node_modules/wintersmith/bin/wintersmith preview -C src

.PHONY: build server
