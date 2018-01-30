import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Table extends React.Component {
  
  render() {
    return (
      <BootstrapTable data={ this.props.product_info }>
        <TableHeaderColumn dataField='asin' isKey>Product ASIN</TableHeaderColumn>
        <TableHeaderColumn dataField='product_name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='ladder'>Product Category</TableHeaderColumn>
        <TableHeaderColumn dataField='rank'>Product Rank</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default Table;
