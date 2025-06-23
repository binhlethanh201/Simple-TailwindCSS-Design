# Getting Started with HTML/CSS/Bootstrap/Tailwind/JavaScript Project

This project is built using standard HTML, CSS, Bootstrap for components, Tailwind CSS for utility-first styling, and vanilla JavaScript for interactivity.

## Available Commands

In this project, you can run:

### `Open index.html`

Launch the application by opening `index.html` in your browser.  
You can double-click the file or open it with Live Server for a better development experience.

### `Live Server` (Optional)

If you're using Visual Studio Code, install the **Live Server** extension.  
Right-click `index.html` and select **"Open with Live Server"** for live reload on file changes.

### `Edit css/style.css`

Custom styles can be written in this file.  
You can also extend Bootstrap or Tailwind utility classes from here.

### `Edit js/script.js`

JavaScript logic is written in `script.js`.  
Use this file to handle events, animations, or DOM manipulations.

### `Tailwind CSS Integration`

Tailwind is included either via CDN or built with CLI:

- **CDN Approach** (used in `index.html`):

  ```html
  <script src="https://cdn.tailwindcss.com"></script>
  ```

- **CLI Approach** (optional):

  If you're using Tailwind CLI, run the following to build your custom CSS:

  ```bash
  npx tailwindcss -i ./src/input.css -o ./css/output.css --watch
  ```

### `Bootstrap Integration`

Bootstrap is loaded via CDN in `index.html`:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```

You can use Bootstrap components like buttons, modals, navbars, and more.


## Learn More

- [HTML – MDN](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS – MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Bootstrap Documentation](https://getbootstrap.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [JavaScript Guide – MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Deployment

You can deploy this project using:

- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)

## Troubleshooting

- Ensure all file paths to CSS, JS, and images are correct.
- Use browser DevTools to inspect elements and debug issues.
- Check the browser console for JavaScript errors.
- Confirm CDN links are loaded properly (check Network tab).
