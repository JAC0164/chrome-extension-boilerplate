import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Newtab from './newtab';

const appRoot = document.createElement('div');

appRoot.id = "root"

document.body.appendChild(appRoot);

const root = ReactDOM.createRoot(appRoot);

root.render(<Newtab />);
