import React from 'react';
import { useState } from 'react';

import './styles.css';

import Title1 from '../../Title1';

import { ReactComponent as DownArrowIcon } from '../../../assets/icon/down-arrow.svg';

import { ReactComponent as LeonardoSurita } from '../../../assets/icon/LandingPage/Leonardo Surita.svg';
import { ReactComponent as JoãoVicttor } from '../../../assets/icon/LandingPage/João Victtor.svg';
// import { ReactComponent as LucasKawakami } from '../../../assets/icon/LandingPage/Lucas Kawakami.svg';
import { ReactComponent as MarcosVeloso } from '../../../assets/icon/LandingPage/Marcos Veloso.svg';
import { ReactComponent as Nicolas } from '../../../assets/icon/LandingPage/Nícolas.svg';

interface MembroEquipeProps {
	name: string;
	area: string;
	icon: any;
	text?: string;
}
const MembroEquipe: React.FC<MembroEquipeProps> = (props)=>{
	const [ isMemberVisible, setIsMemberVisible ] = useState(false);
	function changeVisible() {
		setIsMemberVisible(!isMemberVisible);
	}
	function setVisible(){
		setIsMemberVisible(true);
	}
	function setNotVisible(){
		setIsMemberVisible(false);
	}
	//onClick={changeVisible} onMouseEnter={setVisible} onMouseLeave={setNotVisible}
	return(

		<div className={"MembroEquipe "+(isMemberVisible&&"MembroEquipe-enabled")} >
			<div className={"MemberEquipe-icon-div "+(isMemberVisible&&"MembroEquipe-icon-div-enabled")}>
				<props.icon className="MembroEquipe-icon" />
			</div>
			<div className={"MembroEquipe-nome-div "+(isMemberVisible&&"MemberEquipe-nome-div-enabled")}>
				<span className="MembroEquipe-nome ">
					{props.name}
				</span>
			</div>
			<div className={"MembroEquipe-area-div "+(isMemberVisible&&"MembroEquipe-area-div-enabled")}>
				<span className="MembroEquipe-area">
					{props.area}
				</span>
			</div>
			{isMemberVisible && <div className="horizontal-bar"></div>}
			{/*<button className="MembroEquipe-button">
				<DownArrowIcon className="down-arrow-icon"/>
			</button>*/}
			{isMemberVisible &&
				<div className="MembroEquipe-text-div">
					<span className="MembroEquipe-text">
						{props.text}
					</span>		
				</div>
			}
		</div>
	);
}
function NossaEquipe(){
	return (
		<div className="NossaEquipeLP">
			<Title1 title="Nossa Equipe" />
			<div className="MembroEquipe-List" >
				<a href="https://www.linkedin.com/in/leonardo-surita-b30250184/" target="_blank" rel="noopener noreferrer" className="linkLinkedIn">
					<MembroEquipe name="Leonardo Surita" area="COO & CHRO" icon={LeonardoSurita}/>
					</a>
				{/* <MembroEquipe name="Lucas Kawakami" area="CTO" icon={LucasKawakami}/> */}
				<a href="https://www.linkedin.com/in/marcosveloso99/" target="_blank" rel="noopener noreferrer" className="linkLinkedIn">
					<MembroEquipe name="Marcos Veloso" area="Desenvolvedor" icon={MarcosVeloso} text=""/>
				</a>
				<a href="https://www.linkedin.com/in/%C5%84icolas-alves-8561571b5/" target="_blank" rel="noopener noreferrer" className="linkLinkedIn">
					<MembroEquipe name="Nicolas Alves" area="CMO" icon={Nicolas}/>
				</a>
				<a href="https://www.linkedin.com/in/jo%C3%A3o-victtor-koga-6b7b771a7/" target="_blank" rel="noopener noreferrer" className="linkLinkedIn">
					<MembroEquipe name="João Victtor Koga" area="CEO & CFO" icon={JoãoVicttor} text=""/>
				</a>
			</div>
		</div>
	)
}

export default NossaEquipe;
