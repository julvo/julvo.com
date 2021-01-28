.PHONY: build clean
build:
	tinystatic -output docs
serve:
	cd docs && python3 -m http.server
clean:
	rm -r docs