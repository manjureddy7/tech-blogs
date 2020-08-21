import React from "react";

const HeaderStyleDropdown  = (props) => {

	const onToggle = event => {
		let value = event.target.value;
		props.onToggle(value);
	};


		return (
			<select value={props.active} onChange={onToggle} className="block-select">
				<option value="">Header Levels</option>
				{props.headerOptions.map(heading => {
					return <option value={heading.style} key={heading.label}>{heading.label}</option>;
				})}
			</select>
		);
	
}

export default HeaderStyleDropdown;
