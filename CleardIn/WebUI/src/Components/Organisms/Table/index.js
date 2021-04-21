/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import CheckBoxSharpIcon from '@material-ui/icons/CheckBoxSharp';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Checkbox, Typography } from '@material-ui/core';
import TitleIcon from '@material-ui/icons/TitleSharp';
import { makeStyles } from '@material-ui/core/styles';

import ColoredOption from '../../Atoms/ColoredOption';
import TableHeader from '../../Molecules/TableHeader';
import RowAdder from '../../Molecules/RowAdder';

import './index.css';

const useStyles = makeStyles({
  checkbox: {
    padding: '0px',
    paddingLeft: '0.5',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',

  },
  textStyle: {
    paddingTop: '8px',
  },
  indexStyle: {
    paddingTop: '3px',
  },
});

function Table({ rows }) {
  const classes = useStyles();
  const [checkedIndexes, setCheckedIndexes] = useState([]);
  const [hoveredIndex, sethoveredIndex] = useState(-1);

  const relationshipToColorMapping = {
    customer: '#fdd570',
    vendor: '#daefa9',
    partner: '#b0f1f0',
  };

  const RelationshipRenderer = ({ value }) => (
    <ColoredOption
      label={value}
      color={relationshipToColorMapping[value]}
    />
  );

  const getRowHeight = (params) => (params.node.group ? 72 : 45);

  const onClickHandler = (event) => {
    const rowIndex = event.target.id;
    setCheckedIndexes((prevArray) => {
      // eslint-disable-next-line no-param-reassign
      prevArray[rowIndex] = event.target.checked;
      return (prevArray);
    });
  };

  const CheckboxRenderer = (params) => {
    // eslint-disable-next-line no-shadow
    const { rowIndex, checkedIndexes, hoveredIndex } = params;
    if (checkedIndexes[rowIndex] || hoveredIndex === rowIndex) {
      return (
        <Checkbox
          checked={checkedIndexes[rowIndex]}
          id={rowIndex}
          className={classes.checkbox}
          name={rowIndex}
          size="small"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            paddingTop: '0',
            paddingLeft: '0.5',
          }}
          onClick={onClickHandler}
          color="primary"
        />
      );
    }
    return (
      <Typography
        variant="body1"
        className={classes.indexStyle}
      >
        { rowIndex + 1 }
      </Typography>
    );
  };

  // eslint-disable-next-line no-unused-vars
  const [gridApi, setGridApi] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  const TextStyle = ({ value }) => (
    <Typography
      data-testid="text"
      className={classes.textStyle}
      variant="body1"
    >
      {value}
    </Typography>
  );

  const onCellMouseOver = ({ rowIndex }) => {
    sethoveredIndex(rowIndex);
  };

  return (

    <div
      className="ag-theme-balham"
      style={{ width: '605px' }}
    >
      <AgGridReact
        rowData={rows}
        headerHeight={40}
        onGridReady={onGridReady}
        getRowHeight={getRowHeight}
        onCellMouseOver={onCellMouseOver}
        rowSelection="multiple"
        domLayout="autoHeight"
        defaultColDef={{ resizable: true }}
        frameworkComponents={{
          relationshipRenderer: RelationshipRenderer,
          checkboxRenderer: CheckboxRenderer,
          textStyle: TextStyle,
        }}
      >
        <AgGridColumn
          pinned="left"
          width={35}
          headerCheckboxSelection
          cellRenderer="checkboxRenderer"
          cellRendererParams={{ checkedIndexes, hoveredIndex }}
          cellStyle={{
            fontSize: '1px', align: 'left', borderRight: '1px solid #eeeeee', textAlign: 'center', paddingTop: '10px',
          }}
        />

        <AgGridColumn
          field="domain"
          colId="domain"
          height={36}
          width={210}
          cellStyle={{
            align: 'center',
            paddingTop: '5px',
            justifyContent: 'center',
            borderRight: '2px solid #cccccc',
          }}
          cellRenderer="textStyle"
          headerComponentFramework={() => (
            <TableHeader
              icon1={TitleIcon}
              icon2={MoreVertIcon}
              text="Domain"
            />
          )}
        />
        <AgGridColumn
          field="trustScore"
          colId="trustScore"
          width={167}
          cellStyle={{
            align: 'center',
            paddingTop: '5px',
            justifyContent: 'center',
            textAlign: 'right',
            borderRight: '1px solid #eeeeee',
          }}
          cellRenderer="textStyle"
          headerComponentFramework={() => (
            <TableHeader
              icon1={TitleIcon}
              icon2={MoreVertIcon}
              text="TrustScore"
            />
          )}
        />

        <AgGridColumn
          field="relationship"
          colId="relationship"
          width={190}
          cellStyle={{
            align: 'center',
            paddingTop: '5px',
          }}
          cellRenderer="relationshipRenderer"
          headerComponentFramework={() => (
            <TableHeader
              icon1={CheckBoxSharpIcon}
              icon2={MoreVertIcon}
              text="Relationship"
            />
          )}
        />
      </AgGridReact>
      <RowAdder text="New Row" />
    </div>
  );
}

export default Table;
