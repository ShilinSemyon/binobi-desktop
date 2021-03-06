import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import Application from './components/Application';
import store from './store';

// Create main element
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
link.integrity = 'sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T';
link.crossOrigin = 'anonymous';
document.getElementsByTagName('head')[0].appendChild(link);

const slick = document.createElement('link');
slick.rel = 'stylesheet';
slick.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css';
slick.type = 'text/css';
slick.charset = 'charset';
document.getElementsByTagName('head')[0].appendChild(slick);

const slickTheme = document.createElement('link');
slickTheme.rel = 'stylesheet';
slickTheme.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css';
slickTheme.type = 'text/css';
document.getElementsByTagName('head')[0].appendChild(slickTheme);

// Render components
const render = (Component: () => JSX.Element) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    mainElement
  );
};

render(Application);

// Hot Module Replacement API
if (typeof module.hot !== 'undefined') {
  module.hot.accept('./components/Application', () => {
    import('./components/Application').then(World => {
      render(World.default);
    });
  });
}
