import React from 'react';

import './Crypto.scss';

import image1 from '../../assets/img/collective/1.svg';
import image2 from '../../assets/img/collective/1.svg';

const CryptoPage = () => {
	return (
		<div className="crypto">
			<div className="crypto__banner">
				<div className="row">
					<div className="title-top">Dragon’s Vault</div>
					<h1 className="h1">Crypto Assets</h1>
					<div className="crypto__banner--description">
						Dragon’s Vault core assets are in the crypto-industry. We have invested in external
						crypto-assets such as{' '}
						<a rel="noopener noreferrer" target="_blank" href="http://hodlcommodity.com/">
							HODLC
						</a>
						, and{' '}
						<a rel="noopener noreferrer" target="_blank" href="http://axion.network/">
							Axion
						</a>
						, as well as launched our own internal projects: PSAT, HSTAKE.
					</div>
				</div>
			</div>

			<div>
				<div className="crypto__info">
					<div className="row crypto__info--row">
						<div className="crypto__info--content">
							<div className="crypto__info--subtitle text__right desktop">ERC20 token</div>
							<div className="crypto__info--title text__right desktop">PSAT</div>
							<div className="crypto__info--text text__right">
								PSAT is a ERC20 utility token that will offer an option for its holders to participate
								in private future pre-sales of tokens launched by Dragon’s Vault and its portfolio of
								investees. Whoever owns the largest amount of PSAT will have first right of refusal on
								investing in new tokens and projects such as HSTAKE.
								<br />
								<br />
								As well, PSAT will be the token of choice for Dragon’s Vault future project as a payment
								solution, i.e. new tokens will be sold first in exchange for PSAT. As well, PSAT will be
								the medium of choice in HSTAKE as a payment option for the passive source of income from
								the staking mechanism.
							</div>
						</div>
						<img className="crypto__info--image" src={image2} alt="" />

						<div className="crypto__info--title text__left mobile">PSAT</div>
						<div className="crypto__info--subtitle text__left mobile">ERC20 token</div>
					</div>

					<div className="row crypto__info--row">
						<div className="crypto__info--subtitle text__left mobile">ERC20 token</div>
						<div className="crypto__info--title text__left mobile">HSTAKE</div>

						<img className="crypto__info--image" src={image1} alt="" />

						<div className="crypto__info--content">
							<div className="crypto__info--subtitle text__left desktop">ERC20 token</div>
							<div className="crypto__info--title text__left desktop">HSTAKE</div>
							<div className="crypto__info--text text__left">
								HSTAKE is an Ethereum smart contract that enables the staking of HODL Commodity in
								conjunction with PSAT. PSAT will represent the staking fee as well as the source of
								passive income for stakers. When a staker locks their HODLC into HSTAKE, they will have
								to pay 10% of the value in PSAT, which will be re-distributed to previous stakers
								according to the proportion of HODLC that is staked. Meanwhile, for as long as their
								HODLC is staked, they will receive a proportion of PSAT when new stakers join and
								unstake their HODLC. The stakers will have to pay an additional 10% of the value upon
								unstaking their HODLC.
								<br />
								<br />
								While HODLC is staked into HSTAKE, the value of HODLC keep increasing normally, and
								stakers no longer have to sell HODLC in order to obtain fiat, they can simply sell the
								PSAT they receive periodically.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CryptoPage;
