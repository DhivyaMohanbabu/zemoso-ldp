import React from 'react';
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';
import ListIcon from '@material-ui/icons/List';
import ImportExportOutlinedIcon from '@material-ui/icons/ImportExportOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import NavigationTabs from '../../Components/Organisms/NavigationTabs';
import ToolBar from '../../Components/Organisms/ToolBar';
import InnerPageTemplate from '../../Components/Templates/InnerPageTemplate';
import AppHeader from '../../Components/Organisms/AppHeader';
import SideNavigation from '../../Components/Organisms/SideNavigation';
import { getTabNames } from '../../services/common';
import { getTrustGroupDomains } from '../../services/api';
// import Table from '../../Components/Organisms/Table';
import CheckBoxGrid from '../../Components/Organisms/CheckboxGrid';

const BaseCommunicationPage = () => {
  const tabs = getTabNames();
  // const actionOptions = getToolBarActionOptions();
  const actionOptions = [
    {
      icon: FilterListOutlinedIcon,
      label: 'Filter',
    },
    {
      icon: ListIcon,
      label: 'Group',
    },
    {
      icon: ImportExportOutlinedIcon,
      label: 'Sort',
    },
    {
      icon: DeleteForeverOutlinedIcon,
      label: 'Delete Selected',
      count: 3,
    },
  ];
  const placeholder = 'Find a domain';
  const trustGroupDomains = getTrustGroupDomains('Top 100');
  console.log(actionOptions);
  console.log(trustGroupDomains);

  return (
    <>
      <InnerPageTemplate
        sideBar={<SideNavigation />}
        header={<AppHeader />}
        navigationBar={<NavigationTabs tabs={tabs} />}
        toolBar={<ToolBar placeholder={placeholder} userActions={actionOptions} />}
        body={<CheckBoxGrid />}
      />
    </>
  );
};

export default BaseCommunicationPage;
