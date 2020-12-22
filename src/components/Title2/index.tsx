import React from 'react';
import './styles.css';

interface Title2Props{
	title: string;
	haveUb?: boolean;
}
const Title2:React.FC<Title2Props> = (props) => {
	return(
		<div className="title2-div">
			<h2 className="title2">{props.title}</h2>
			{props.haveUb&& <div className="title2-underbar"></div>}
		</div>
	)
}
export default Title2;
