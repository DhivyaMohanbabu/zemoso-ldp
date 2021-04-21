import React from 'react';
import MainTemplate from '../../Components/Templates/MainTemplate';
import AppHeader from '../../Components/Organisms/AppHeader';
import SideNavigation from '../../Components/Organisms/SideNavigation';
import img from '../../../assets/images/access_logo.png';
import img2x from '../../../assets/images/access_logo_2x.png';
import img3x from '../../../assets/images/access_logo_3x.png';
import AppLander from '../../Components/Organisms/AppLander';

const LandingPage = () => {
  const imageSrc = [img, img2x, img3x];
  const imageTitle = 'Access Image';
  const bannerText = 'Your active permissions will appear here';

  return (
    <MainTemplate
      sideBar={<SideNavigation />}
      header={<AppHeader />}
      body={<AppLander imageTitle={imageTitle} imageSrc={imageSrc} bannerText={bannerText} />}
    />
  );
};

export default LandingPage;
