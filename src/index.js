import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(
	//The file we are rendering to the page to index.html
	<App />,
	//the place where we want the file to be rendered
	document.getElementById('app')
	)