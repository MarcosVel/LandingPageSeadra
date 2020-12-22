import React from 'react';
import './styles.css';

import Title1 from '../../Title1';

import { ReactComponent as exportIcon } from '../../../assets/icon/export.svg';
import { ReactComponent as importIcon } from '../../../assets/icon/Import.svg';
import { ReactComponent as produtorIcon } from '../../../assets/icon/Produtor.svg';

interface iconDivProps{
	arrowDirection?:string;
	icon: any;
}
const IconDiv:React.FC<iconDivProps> = (props) =>{
	return (
		<div className="IconDiv">
			<props.icon className="IconDiv-icon"/>
		</div>
	);
}
function Plataforma(){
	return(
		<div className="LP-Plataforma">
			<Title1 title="A Plataforma" />
			<div className="LP-Plataforma-content">
				<div className="Plataforma-Seadra" >
					<h3 className="Plataforma-text-title">
						SEADRA
					</h3>
					<span className="Plataforma-text">
						É o meio técnico que irá conectar tanto o produtor 
						quanto o importador e exportador para suas negociações. 
						Além disso, iremos nos responsabilizar por todos os processos 
						que a operação internacional haverá de necessitar
					</span>
				</div>
				<div className="Plataforma-row">
					<div className="Plataforma-lat-col">
						<div className="Plataforma-text-div">
							<h3 className="Plataforma-text-title">
								EXPORTADORES
							</h3>
							<span className="Plataforma-text">
								Vendedores com interesse em conseguir preços mais 
								competitivos no mercado externo, criando operações 
								de exportação mais lucrativas, rápidas e eficientes.
							</span>
						</div>
					</div>
					<div className="Plataforma-cen-col">
						<div className="Plataforma-icon-container" id="PlatIc">
							<div className="Plataforma-icon-sup">
								<div className="Plataforma-icon-div" id="PlatExp">
									<IconDiv icon={exportIcon} arrowDirection="left"/>
								</div>
								<div className="icon-horizontal-bar" id="Platbh1" />
								<div className="Plataforma-icon-sea" id="PlatSea">
									<IconDiv icon={importIcon} arrowDirection="left" />
								</div>
								<div className="icon-horizontal-bar" id="Platbh2" />
								<div className="Plataforma-icon-div" id="PlatImp">
									<IconDiv icon={importIcon} arrowDirection="left" />
								</div>
							</div>
							<div className="Plataforma-icon-bot">
								<div className="icon-vertical-bar" id="Platbv1" />
								<div className="Plataforma-icon-prod" id='PlatProd'>
									<IconDiv icon={produtorIcon} arrowDirection="top"/>
								</div>
							</div>
						</div>
						<div className="Plataforma-text-div">
							<h3 className="Plataforma-text-title">
								PRODUTORES
							</h3>
							<span className="Plataforma-text">
								Produtores rurais que são reféns de 
								cooperativas ou mesmo exportadoras, 
								procuram uma nova forma de vender seus produtos de forma simples 
								com mais lucro
							</span>
						</div>
					</div>
					<div className="Plataforma-lat-col">
						<div className="Plataforma-text-div">
							<h3 className="Plataforma-text-title">
								IMPORTADORES
							</h3>
							<span className="Plataforma-text">
								Compradores que procuram os melhores preços no mercado externo, 
								pretendendo adquirir seus insumos industriais ou mesmo para 
								revenda no mercado interno para conseguir maiores e melhores lucros.
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Plataforma;