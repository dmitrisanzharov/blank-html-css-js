import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

const element = React.createElement('h1', null, 'Hello React!');

root.render(element);
