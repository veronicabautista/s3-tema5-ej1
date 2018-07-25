import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<p className="read">Leer más...</p>
				<div>
					<p className="likes">37 <i class="fas fa-heart" /></p>
				</div>
			</div>
		);
	}
}

export default Footer;