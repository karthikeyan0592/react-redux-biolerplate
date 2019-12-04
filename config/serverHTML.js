export function getHTML(props) {
  const { html, scriptTags } = props
  return `
  <html>
  <head><title>My First SSR</title></head>
  <body>
  <h1>My First Server Side Render</h1>
  <div id="target">${html}</div>
  </body>
  ${scriptTags}
  </html>
  `
}
