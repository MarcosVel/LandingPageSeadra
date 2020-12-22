import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './routes';

// function NoMatch(){
// 	return(
// 		<div style={{
// 			height:'70vh',
// 			width:'100vw',
// 			display:'flex',
// 			justifyContent:'center',
// 			alignItems:'center',
// 			fontSize:'2.5rem',
// 			flexDirection:'column'
// 		}}>
// 			Página não encontrada
// 			<Link to="/home">
// 				<span style={{fontSize:'1rem',color:'blue',textDecoration:'underline'}}>
// 					ir para página inicial
// 				</span>
// 			</Link>
// 		</div>
// 	);
// }

function App() {
	return (
		<Routes />
	);
}

export default App;
