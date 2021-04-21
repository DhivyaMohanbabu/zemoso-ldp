/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import CheckBoxSharpIcon from '@material-ui/icons/CheckBoxSharp';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Checkbox, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TitleIcon from '@material-ui/icons/Title';
import TableHeader from '../../Molecules/TableHeader';
import 'ag-grid-enterprise';
import Permission from './Permission';
import TrustGroup from './TrustGroup';

const useStyles = makeStyles({
  checkbox: {
    padding: '10px 0 0',
  },
  serialNumber: {
    padding: '13px 0',
  },
  gridRow: {
    alignContent: 'center',
  },
});
function PermissionTable() {
  const classes = useStyles();
  const rowData = [
    {
      id: 1, name: 'Do not Trust', invite: 'invite', comment: 'comment', edit: 'edit', transer: 'transfer OwnerShip', checked: false,
    },
    {
      id: 2, name: 'Top 100', domain: 'zemosolabs.com', trustScore: 22, relationShip: 'Top100', checked: false,
    },
    {
      id: 3, name: 'Top 200', domain: 'zemosolabs.com', trustScore: 22, relationShip: 'Top200', checked: false,
    },
  ];
  const [hoveredIndex, setHoverIndex] = useState();
  const [checkedIndexes, setCheckedIndexes] = useState([]);
  const onchangeHandler = (event) => {
    const name = event.target.id;
    rowData[name].checked = document.getElementById(name).checked;
    if (document.getElementById(name).checked === true) {
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
  const CheckBoxes = ({
    rowIndex, hoverIndex, checkedIndex, data,
  }) => ((checkedIndex.includes(rowIndex) == true)
    ? <Checkbox size="small" className={classes.checkbox} checked id={rowIndex} name={rowIndex} onClick={onchangeHandler} color="primary" />
    : ((hoverIndex === rowIndex && hoveredIndex !== -1)
      ? <Checkbox size="small" id={rowIndex} className={classes.checkbox} name={rowIndex} onClick={onchangeHandler} color="primary" />
      : <Typography className={classes.serialNumber} variant="body1">{data.id}</Typography>
    ));
  const onHover = ({ rowIndex }) => {
    setHoverIndex(rowIndex);
  };
  const onMouseLeave = () => {
    setHoverIndex(-1);
  };
  return (
    <div
      className="ag-theme-balham"
      style={{ height: '500px', width: '1100px' }}
    >
      <AgGridReact
        headerHeight={45}
        domLayout="autoHeight"
        onCellMouseOut={onMouseLeave}
        onCellMouseOver={onHover}
        rowHeight={40}
        groupUseEntireRow
        frameworkComponents={{
          check: CheckBoxes,
          permission: Permission,
          trustGroup: TrustGroup,
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
          width={45.9}
          headerCheckboxSelection
          cellRenderer="check"
          cellRendererParams={{ hoverIndex: hoveredIndex, checkedIndex: checkedIndexes }}
        />
        <AgGridColumn
          headerComponentFramework={() => <TableHeader icon1={TitleIcon} icon2={MoreVertIcon} text="Trustgroup" />}
          field="name"
          resizable
          cellRenderer="trustGroup"
          cellStyle={{
            'border-right-color': '#e2e2e2',
            'text-align': 'flex-start',
            'justify-content': 'center',
            'align-items': 'center',
            'padding-top': '8px',
          }}

        />
        <AgGridColumn
          className={classes.gridRow}
          headerComponentFramework={() => <TableHeader icon1={CheckBoxSharpIcon} icon2={MoreVertIcon} text="Can invite?" />}
          field="invite"
          resizable
          cellRenderer="permission"
          cellStyle={{ 'border-right-color': '#e2e2e2', 'text-align': 'center' }}
        />
        <AgGridColumn
          headerComponentFramework={() => <TableHeader icon1={CheckBoxSharpIcon} icon2={MoreVertIcon} text="Can edit?" />}
          field="edit"
          resizable
          cellRenderer="permission"
          cellStyle={{ 'border-right-color': '#e2e2e2', 'text-align': 'center' }}
        />
        <AgGridColumn
          headerComponentFramework={() => <TableHeader icon1={CheckBoxSharpIcon} icon2={MoreVertIcon} text="Can Comment?" />}
          field="comment"
          cellRenderer="permission"
          resizable
          cellStyle={{ 'border-right-color': '#e2e2e2', 'text-align': 'center' }}
          cellClass="grid-cell-centered"
        />
        <AgGridColumn
          headerComponentFramework={() => <TableHeader icon1={CheckBoxSharpIcon} icon2={MoreVertIcon} text="Can transfer ownership?" />}
          field="transfer"
          cellRenderer="permission"
          resizable
          flex={1}
          cellStyle={{ 'border-right-color': '#e2e2e2', 'text-align': 'center' }}
        />
      </AgGridReact>

    </div>
  );
}
export default PermissionTable;
