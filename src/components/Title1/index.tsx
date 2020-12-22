import React from 'react';
import './style.css';
interface Title1Props {
	title: string;
}
const Title1: React.FC<Title1Props> = (props) =>{
	return (
		<div className="title1">
			<h2 className="title1-text">{props.title}</h2>
			<div className="title1-underbar"></div>
		</div>
	);
}

export default Title1;
