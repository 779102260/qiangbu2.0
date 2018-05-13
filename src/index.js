import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';


let rootEle=document.createElement('div');
document.body.append(rootEle);

ReactDOM.render(
	<App />,
	rootEle
);