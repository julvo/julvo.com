.PHONY: build clean
build:
	tinystatic -output docs
serve:
	cd docs && python3 -m http.server
clean:
	rm -r docs
css:
	NODE_ENV=production npx tailwindcss-cli@latest build -c tailwind.config.js -o routes/css/tailwind.css
