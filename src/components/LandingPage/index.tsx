import React from 'react';

import HeaderLandingPage from './HeaderLandingPage';
import Vantagens from './Vantagens';
import Plataforma from './Plataforma';
import PorqueNos from './PorqueNos';
import NossaEquipe from './NossaEquipeLP';
import FooterLandingPage from './FooterLandingPage';

function index() {
  return (
    <>
      <HeaderLandingPage />
      <Vantagens />
      <Plataforma />
      <PorqueNos />
      <NossaEquipe />
      <FooterLandingPage />
    </>
  )
}

export default index;
