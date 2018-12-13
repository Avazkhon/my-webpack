import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './footer/footer.js'
import Content from './content/content.js'

function Conteiner () {
	return (
		<div className='conteiner'>
			{Footer()}
			{Content()}
		</div>
	)
};

ReactDOM.render(
  Conteiner(),
  document.getElementById('app')
);

module.hot.accept();