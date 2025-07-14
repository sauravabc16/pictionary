# pictionary
This application is a web-based Pictionary suggestion tool, designed to randomly suggest objects to draw from a predefined list. It features a minimalist design with a large, central display for the suggestion text, ensuring high visibility. Upon clicking a button, users receive a random suggestion accompanied by a dynamically fetched image from the Unsplash API, providing a visual reference. The interface uses HTML for structure, CSS for styling with an elegant, modern look, and JavaScript for functionality, including API integration for real-time image retrieval. It's ideal for enhancing Pictionary games, offering both textual and visual prompts in a user-friendly format.

DEMO: https://sauravabc16.github.io/pictionary/

## Deployment with GitHub Pages

The application expects an Unsplash API key, which is injected at deployment
time. Store your key in the repository secrets as `UNSPLASH_API_KEY`. A GitHub
Actions workflow will replace the placeholder in `script.js` and deploy the site
to GitHub Pages automatically when changes are pushed to the `main` branch.
