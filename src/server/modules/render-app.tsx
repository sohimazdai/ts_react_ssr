import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../../client/components/App';

export function renderApp(): string {
  const app = React.createElement(App);

  const html = ReactDOMServer.renderToString(app);

  return html;
};
