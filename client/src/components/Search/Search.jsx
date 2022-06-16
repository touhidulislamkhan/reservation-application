import {
	faBed,
	faCalendarDays,
	faPerson,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from 'react-router-dom';
import './search.css';
const Search = () => {
	const [destination, setDestination] = useState('');
	const [openDate, setOpenDate] = useState(false);
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	]);
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	});
	const [openOptions, setOpenOptions] = useState(false);

	const navigate = useNavigate();

	const handleOptions = (name, operation) => {
		setOptions({
			...options,
			[name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
		});
	};

	const handleSearch = () => {
		navigate('/hotels', { state: { destination, date, options } });
	};

	return (
		<div className="search">
			<div className="searchItem">
				<FontAwesomeIcon icon={faBed} className="icon" />
				<input
					type="text"
					placeholder="Where are you going?"
					className="searchInput"
					onChange={(e) => setDestination(e.target.value)}
				/>
			</div>
			<div className="searchItem">
				<FontAwesomeIcon icon={faCalendarDays} className="icon" />
				<span onClick={() => setOpenDate(!openDate)} className="searchText">
					{`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(
						date[0].endDate,
						'dd/MM/yyyy'
					)}`}
				</span>

				{openDate && (
					<DateRange
						editableDateInputs={true}
						onChange={(item) => setDate([item.selection])}
						moveRangeOnFirstSelection={false}
						ranges={date}
						className="date"
						minDate={new Date()}
					/>
				)}
			</div>
			<div className="searchItem">
				<FontAwesomeIcon icon={faPerson} className="icon" />
				<span
					onClick={() => setOpenOptions(!openOptions)}
					className="searchText"
				>
					{`${options.adult} adults . ${options.children} children . ${options.room} room`}
				</span>

				{openOptions && (
					<div className="options">
						<div className="optionItem">
							<span className="optionText">Adult</span>
							<div className="optionCounter">
								<button
									disabled={options.adult <= 1}
									className="optionCounterBtn"
									onClick={() => handleOptions('adult', 'd')}
								>
									-
								</button>
								<span className="optionCounterNumber">
									{`${options.adult}`}
								</span>
								<button
									className="optionCounterBtn"
									onClick={() => handleOptions('adult', 'i')}
								>
									+
								</button>
							</div>
						</div>
						<div className="optionItem">
							<span className="optionText">Children</span>
							<div className="optionCounter">
								<button
									disabled={options.children <= 0}
									className="optionCounterBtn"
									onClick={() => handleOptions('children', 'd')}
								>
									-
								</button>
								<span className="optionCounterNumber">{`${options.children}`}</span>
								<button
									className="optionCounterBtn"
									onClick={() => handleOptions('children', 'i')}
								>
									+
								</button>
							</div>
						</div>
						<div className="optionItem">
							<span className="optionText">Room</span>
							<div className="optionCounter">
								<button
									disabled={options.room <= 1}
									className="optionCounterBtn"
									onClick={() => handleOptions('room', 'd')}
								>
									-
								</button>
								<span className="optionCounterNumber">{`${options.room}`}</span>
								<button
									className="optionCounterBtn"
									onClick={() => handleOptions('room', 'i')}
								>
									+
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
			<div className="searchItem">
				<button className="searchBtn" onClick={handleSearch}>
					Search
				</button>
			</div>
		</div>
	);
};

export default Search;
