import React from 'react';
import { Button, Container, Row } from 'reactstrap';
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-scroll";
import './styles.css';

import logoImg from '../../../assets/icon/SeadraLogoSite.svg';

const HeaderLandingPage = () => (
   <header className='headerLp'>
      <Container fluid>
         <Row>            
            <img className='logo mb-5' src={logoImg} alt="logo Seadra" />            
         </Row>
         <Row>            
            <h1 className='text-white principalText mb-5'>Conectamos,<strong> Produtores <br /> Exportadores e Importadores <br /></strong> por todo o mundo.</h1>            
         </Row>
         <Row>
            <Link className='linkBtnSaibaMais'               
               to="toVantagens"
               spy={true}
               smooth={true}
               offset={-33}
               duration={800}
            >
               <Button className='btnSaibaMais mt-5'>Saber mais <IoIosArrowDown className='arrowDown' /></Button>
            </Link>
         </Row>
      </Container>
   </header>

)

export default HeaderLandingPage;