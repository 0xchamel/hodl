import React from 'react';

import './Collective.scss';

const CollectivePage = () => {
	return (
		<div className="collective">
			<div className="collective__banner">
				<div className="row">
					<div className="title-top">Dragon’s Vault</div>
					<h1 className="h1">Human Capital </h1>
					<div className="collective__banner--description">
						Dragon’s Vault provider matches funds into entrepreneurs' careers and manages a trust fund on
						their behalf.
					</div>
				</div>
			</div>
			<div className="collective__video">
				<iframe
					title="Media video"
					frameBorder="0"
					allowFullScreen=""
					width="100%"
					height="100%"
					src="https://www.youtube.com/embed/sBR8GTUxznM"
				></iframe>
			</div>
		</div>
	);
};

export default CollectivePage;
