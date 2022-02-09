import React from 'react';
import { render } from 'react-dom';

import theme from './lib/theme';
import App from './components/App';

render(<App theme={theme} />, document.getElementById('app'));
