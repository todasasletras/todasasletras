import React from 'react';
import { render } from 'react-dom';
import GlobalStyle from 'styles/global';

import App from './App.js';

render(<><GlobalStyle /><App /></>, document.getElementById('root'));
