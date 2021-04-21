import React from 'react';
import SideNavigation from '../../Components/Organisms/SideNavigation';
import InnerPageTemplate from '../../Components/Templates/InnerPageTemplate';
import AppHeader from '../../Components/Organisms/AppHeader';
import NavigationTabs from '../../Components/Organisms/NavigationTabs';
import ToolBar from '../../Components/Organisms/ToolBar';

const Tables = () => {
  console.log('Hello');
  return (
    <InnerPageTemplate
      sideBar={<SideNavigation />}
      header={<AppHeader />}
      navigationBar={<NavigationTabs tabs={['Top 100', 'Top 1000', 'External partners', 'Box communication base']} />}
      toolBar={<ToolBar />}
    />
  );
};

export default Tables;
