import React from 'react';
import TableGroupingHeader from '../../Molecules/TableGroupingHeader';

export default (params) => (
  <div>
    <TableGroupingHeader
      text={params.value}
      count={params.node.childrenAfterFilter.length}
    />
  </div>
);
