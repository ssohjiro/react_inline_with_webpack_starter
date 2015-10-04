import React from 'react';
import Button from 'component/Button';

class Main extends React.Component {

	render() {

		return (

			<div>
				<Button />
				<br />
				<Button />
				<br />
				<Button />
				<br />
				<Button />
				<br />
			</div>
		);
	}
}

React.render( <Main />, document.body );
