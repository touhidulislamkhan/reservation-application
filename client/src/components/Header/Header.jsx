import {
	faBed,
	faCar,
	faPlane,
	faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Search from '../Search/Search';
import './header.css';

const Header = ({ type }) => {
	return (
		<div className="header">
			<div
				className={
					type === 'list' ? 'headerContainer listMode' : 'headerContainer'
				}
			>
				<div className="headerList">
					<div className="headerListItem active">
						<FontAwesomeIcon icon={faBed} />
						<span>Stays</span>
					</div>

					<div className="headerListItem">
						<FontAwesomeIcon icon={faPlane} />
						<span>Flights</span>
					</div>

					<div className="headerListItem">
						<FontAwesomeIcon icon={faCar} />
						<span>Car Rentals</span>
					</div>

					<div className="headerListItem">
						<FontAwesomeIcon icon={faBed} />
						<span>Attractions</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faTaxi} />
						<span>Airport Taxis</span>
					</div>
				</div>
				{type !== 'list' && (
					<>
						<h1 className="headerTitle">
							A lifetime of discounts? It's Genius.{' '}
						</h1>
						<p className="headerDesc">
							Get rewarded for your travels – unlock instant savings of 10% or
							more with a free BookNow.com account
						</p>
						<button className="headerBtn">Sign In / Login</button>
						<>
							<Search />
						</>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
