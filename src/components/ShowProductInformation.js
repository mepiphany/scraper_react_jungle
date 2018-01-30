import React, { Component } from 'react';
import axios from 'axios';
import update from 'immutability-helper';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../react-bootstrap-table-all.min.css';
import Table from './Table'




class ShowProductInformation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '', 
      product_informations: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/product_informations.json')
    .then(response => {
      console.log(response)
      this.setState({product_informations: response.data})
    })
    .catch(error => console.log(error))
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    axios.post(
      'http://localhost:3001/api/v1/product_informations',
      { asin: this.state.value }
    ).then(response => {
      const product_information = update(this.state.product_informations, {
        $splice: [[0, 0, response.data]]
      })  
      this.setState({product_informations: product_information})
      alert("Successfully Added")
      
    })
    .catch(error => {
      console.log(error)
      alert("Something Went Wrong, Please Try again")
    }
    )
    alert('ASIN was submitted: ' + this.state.value);
    
    event.preventDefault();
  }
  
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            ASIN:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
            <input type="submit" value="Submit" />
        </form>
      
      <Table product_info={this.state.product_informations} />
      </div>
    );
  }
  
}
  
  export default ShowProductInformation;
  