import React from 'react';
import { useState } from 'react';

import './styles.css';

import SiteMockup from '../../../assets/img/SiteMockup.png';

import Title1 from '../../Title1';

import { ReactComponent as DownArrowIcon } from '../../../assets/icon/down-arrow.svg';

import { ReactComponent as CustoReduzidosIcon } from '../../../assets/icon/LandingPage/CustosReduzidos.svg';
import { ReactComponent as AumentoLucroIcon } from '../../../assets/icon/LandingPage/Aumento de Lucro.svg';
import { ReactComponent as AgilidadeIcon } from '../../../assets/icon/LandingPage/Agilidade.svg';
import { ReactComponent as SegurancaIcon } from '../../../assets/icon/LandingPage/seguranca.svg';
import { ReactComponent as AtendimentoExclusivoIcon } from '../../../assets/icon/LandingPage/Atendimento Exclusivo.svg';

interface VantagensOptionProps {
	title: string;
	icon: any;
	text?: string;
}

const VantagensOption: React.FC<VantagensOptionProps> = (props) => {
	const [ isOptionVisible, setIsOptionVisible ] = useState(false);
	function changeVisible() {
		setIsOptionVisible(!isOptionVisible);
	}
	function setVisible(){
		setIsOptionVisible(true);
	}
	function setNotVisible(){
		setIsOptionVisible(false);
	}
	return (
		<div className={"vantagens-option " + (isOptionVisible && "vantagens-option-enabled")} onMouseEnter={setVisible} onMouseLeave={setNotVisible} >
			<div className="vantagens-option-column">
				<button onClick={changeVisible} className={"v-dab " + (isOptionVisible && 'v-dab-enabled')}>
						<DownArrowIcon className={"v-dai " + (isOptionVisible && 'v-dai-enabled')} />
				</button>
			</div>
			<div className="vantagens-option-column">
				<div className={"v-option-icon-div " + (isOptionVisible && 'v-option-icon-div-enabled')}>
					<props.icon className="v-option-icon" />
				</div>
				{isOptionVisible && <div className="v-vertical-bar"></div>}
			</div>
			<div className="vantagens-option-column">
				<h5 className={"v-option-title " + (isOptionVisible && 'v-option-title-enabled')}>{props.title}</h5>
				{isOptionVisible &&  <span className="vantagens-option-text">{props.text}</span>}
			</div>
		</div>
	);
}

function Vantagens() {

	return (
		<div className="vantagens" id="toVantagens">
			<Title1 title="Vantagens"/>
			<div className="vantagens-content">
				<div className="vantagens-menu">
					<VantagensOption title="Custo Reduzidos" icon={CustoReduzidosIcon} text="
						Taxas e comissões não são um problema para a Sedra.
						Possuímos as menores taxas do mercado a fim de tornar
						 o comércio exterior mais acessível para todos.
					" />
					<VantagensOption title="Aumento de Lucro" icon={AumentoLucroIcon} text="
						A Seadra além de trazer redução de custos,
						cria a oportunidade de melhores preços competitivos no mercado,
						aumento não apenas suas vendas, como sua margem de lucro.
					"/>
					<VantagensOption title="Agilidade" icon={AgilidadeIcon} text='
						Usamos uma tecnologia chamada "Document Assembly" 
						que cria todos os documentos necessários 
						para suas negociações em poucos segundos. 
						Os processos burocráticos que antes demoravam anos, 
						agora são feitos em poucos meses.
					'/>
					<VantagensOption title="Segurança" icon={SegurancaIcon} text="
						Trazemos garantia e segurança para nossos clientes de forma que todas as partes numa operação
						estejam tranquilas e seguras que irão receber seu dinheiro em mãos sem maiores preocupações
					"/>
					<VantagensOption title="Atendimento Exclusivo" icon={AtendimentoExclusivoIcon} text="
						Para os clientes da nossa plataforma, 
						haverá agentes técnico exclusivos de forma presencial e on-line, 
						garantindo que a operação seja efetuada com sucesso.
					"/>
				</div>
				<img className="SiteMockup" src={SiteMockup} alt="SiteMockup" />
			</div>
		</div>
	);
}


export default Vantagens;
