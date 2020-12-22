import React from 'react';
import { Container, Row } from 'reactstrap';
import './styles.css';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const FooterLandingPage = () => (
   <footer className='footerLp'>
      <Container fluid>
         <Row>            
            <div className='divSocialFooter'>
               <a href="https://www.instagram.com/seadra.trade/" target="_blank" rel="noopener noreferrer" className='borderSocialFooter'>
                  <FaInstagram className='iconSocialFooter' />
               </a>
               <a href="https://www.linkedin.com/company/seadra-trade/" target="_blank" rel="noopener noreferrer" className='borderSocialFooter'>
                  <FaLinkedinIn className='iconSocialFooter' />
               </a>
               <a href="https://www.facebook.com/SeadraTrade" target="_blank" rel="noopener noreferrer" className='borderSocialFooter'>
                  <FaFacebookF className='iconSocialFooter' />
               </a>
               <a href="https://twitter.com/SeadraCompany" target="_blank" rel="noopener noreferrer" className='borderSocialFooter'>
                  <FaTwitter className='iconSocialFooter' />
               </a>
            </div>            
         </Row>
      </Container>
   </footer>
);

export default FooterLandingPage;