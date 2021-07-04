import express from 'express';
import path from 'path';
import { readHtmlSource } from './modules/read-html-source';
import { renderApp } from './modules/render-app';

const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname)))

app.get('/', async (req, res) => {
  const html = await readHtmlSource();
  const app = renderApp();

  const htmlWithReactApp = html.replace('{{APP}}', app);

  res.send(htmlWithReactApp);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
