export function getHTML(app) {
    return(`
  <html>
  <head><title>My First SSR</title></head>
  <body>
  <h1>My First Server Side Render</h1>
  <div id="app-root">${app}</div>
  </body>
  </html>
  `)
}