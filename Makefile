build:
	@wintersmith build -C src

server:
	@wintersmith preview -C src

.PHONY: build server
