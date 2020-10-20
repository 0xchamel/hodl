import React from 'react';

import './Human.scss';

const HumanPage = () => {
	return (
		<div className="human">
			<div className="human__banner">
				<div className="row">
					<div className="title-top">Dragon’s Vault</div>
					<h1 className="h1">Human Capital </h1>
					<div className="human__banner--description">
						Dragon’s Vault provider matches funds into entrepreneurs' careers and manages a trust fund on
						their behalf.
					</div>
				</div>
			</div>
			<div className="human__video">
				<iframe
					title="Media video"
					frameBorder="0"
					allowFullScreen=""
					width="100%"
					height="100%"
					src="https://www.youtube.com/embed/sgfyT07S_to"
				></iframe>
			</div>
		</div>
	);
};

export default HumanPage;
