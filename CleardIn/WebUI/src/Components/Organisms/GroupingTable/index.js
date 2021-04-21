/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Checkbox, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TitleIcon from '@material-ui/icons/TitleSharp';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { grey } from '@material-ui/core/colors';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GroupRowInnerRenderer from './GroupRowInnerRenderer';
import DropDown from '../DropDown';
import TableHeader from '../../Molecules/TableHeader';
import RowAdder from '../../Molecules/RowAdder';

const name = [{ label: 'Top 100' }, { label: 'Top 200' }, { label: 'Do not trust' }];
const useStyles = makeStyles({
  checkbox: {
    padding: '0px',
    paddingTop: '8px',

  },
  TextStyle: {
    paddingTop: '8px',
  },
});

function GridTable() {
  const classes = useStyles();
  const [rowData, setRowData] = useState([
    {
      id: 1, email: 'nk@zemosolabs.com', domain: 'zemosolabs.com', trustScore: 22, relationShip: 'Do not trust', checked: false,
    },
    {
      id: 2, email: 'alpha@zemosolabs.com', domain: 'zemosolabs.com', trustScore: 22, relationShip: 'Do not trust', checked: false,
    },
    {
      id: 3, email: 'nh@zemosolabs.com', domain: 'zemosolabs.com', trustScore: 22, relationShip: 'Do not trust', checked: false,
    },

    {
      id: 4, email: 'beta@zemosolabs.com', domain: 'zemosolabs.com', trustScore: 22, relationShip: 'Top 100', checked: false,
    },

  ]);
  const [hoveredIndex, setHoverIndex] = useState();
  const [checkedIndexes, setCheckedIndexes] = useState([]);

  const onGroupChange = (arg1, data) => {
    let i = -1;
    const updatedRowdata = JSON.parse(JSON.stringify(rowData));
    for (i = 0; i < updatedRowdata.length; i += 1) {
      if (updatedRowdata[i].id === data.id) {
        updatedRowdata.splice(i, 1);
        const element = data;
        element.relationShip = arg1.label;
        updatedRowdata.push(element);
        break;
      }
    }
    setRowData(updatedRowdata);
  };
  const [gridApi, setGridApi] = useState();

  useEffect(() => {
    if (gridApi) {
      gridApi.setRowData(rowData);
    }
  }, [rowData]);

  const gridReady = (params) => {
    setGridApi(params.api);
  };
  const RowStyle = (params) => {
    if (params.node.group) {
      return { borderTop: '10px solid white', backgroundColor: grey[100] };
    }
    return {};
  };
  const RowHeight = (params) => (params.node.group ? 65 : 36);
  const onchangeHandler = (event) => {
    const { id } = event.target.id;
    for (let i = 0; i < rowData.length; i += 1) {
      if (rowData[i].id == id) {
        rowData[id].checked = event.target.checked;
      }
    }
    if (event.target.checked === true) {
      if (checkedIndexes.includes(event.target.id) === false) {
        checkedIndexes.push(Number(event.target.id));
      }
      setCheckedIndexes(checkedIndexes);
    } else {
      const index = checkedIndexes.indexOf(Number(event.target.id));
      if (index !== -1) {
        checkedIndexes.splice(index, 1);
      }
    }
  };
  const TextStyle = ({ value }) => (
    <Typography
      data-testid="text"
      className={classes.TextStyle}
      variant="body1"
    >
      {value}
    </Typography>
  );
  const CheckBoxes = ({
    rowIndex, checkedIndex, data,
  }) => ((checkedIndex.includes(data?.id) == true) ? <Checkbox size="small" className={classes.checkbox} checked id={data?.id} name={rowIndex} onClick={onchangeHandler} color="primary" /> : (<Checkbox size="small" id={data?.id} className={classes.checkbox} name={rowIndex} onClick={onchangeHandler} color="primary" />));
  const onHover = ({ rowIndex }) => {
    setHoverIndex(rowIndex);
  };
  return (
    <div
      data-testid="grid"
      className="ag-theme-balham"
      style={{ width: '827px' }}
    >
      <AgGridReact
        headerHeight={45}
        domLayout="autoHeight"
        onCellMouseOver={onHover}
        getRowHeight={RowHeight}
        onGridReady={gridReady}
        groupUseEntireRow
        getRowStyle={RowStyle}
        frameworkComponents={{
          groupRowInnerRenderer: GroupRowInnerRenderer,
          check: CheckBoxes,
          dropdown: DropDown,
          textStyle: TextStyle,
        }}
        groupRowRendererParams={{
          innerRenderer: 'groupRowInnerRenderer',
          pinned: 'right',
          suppressCount: true,
        }}
        rowData={rowData}
      >
        <AgGridColumn
          pinned="left"
          width={45}
          headerCheckboxSelection
          cellRenderer="check"
          cellRendererParams={{ hoverIndex: hoveredIndex, checkedIndex: checkedIndexes }}
          cellStyle={{ 'text-align': 'left' }}
        />
        <AgGridColumn
          headerComponentFramework={() => <TableHeader icon1={MailOutlineIcon} icon2={MoreVertIcon} text="Emails" />}
          field="email"
          resizable
          width={250}
          cellRenderer="textStyle"
          cellStyle={{ 'border-right-color': '#080808', 'text-align': 'left' }}
        />
        <AgGridColumn
          headerComponentFramework={() => <TableHeader icon1={TitleIcon} icon2={MoreVertIcon} text="Domain" />}
          field="domain"
          resizable
          width={200}
          cellRenderer="textStyle"
          cellStyle={{ 'border-right-color': '#e2e2e2', 'text-align': 'left' }}
        />
        <AgGridColumn
          headerComponentFramework={() => <TableHeader icon1={TitleIcon} icon2={MoreVertIcon} text="Trust Score" />}
          field="trustScore"
          resizable
          width={150}
          cellRenderer="textStyle"
          cellStyle={{ 'border-right-color': '#e2e2e2', 'text-align': 'right' }}
        />
        <AgGridColumn
          headerComponentFramework={() => <TableHeader icon1={ArrowDropDownCircleIcon} icon2={MoreVertIcon} text="Group" />}
          field="relationShip"
          width={180}
          rowGroup
          cellRenderer="dropdown"
          cellRendererParams={{
            names: name,
            isSecurityDropDown: true,
            handleGroupChange: (arg1, data) => {
              onGroupChange(arg1, data);
            },
          }}
          resizable
          flex={1}
          cellStyle={{ 'text-align': 'left' }}
        />
      </AgGridReact>
      <RowAdder text="New Row" />

    </div>
  );
}
export default GridTable;
