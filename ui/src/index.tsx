import React from 'react';
import { render } from 'react-dom';

import theme from 'lib/theme';
import { createAppStore } from 'lib/redux';
import App from 'components/App';

render(<App theme={theme} store={createAppStore()} />, document.getElementById('app'));
