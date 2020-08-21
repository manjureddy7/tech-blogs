import React from "react";

const BlockStyleButton  = (props) => {

	const onToggleClick = e => {
		e.preventDefault();
		props.onToggle(props.style);
	};

	
		let className = "RichEditor-styleButton";
		if (props.active) {
			className += " RichEditor-activeButton";
		}

		return (
			<span className={className} onClick={onToggleClick}>
				{props.label}
			</span>
		);
	
}

export default BlockStyleButton;
