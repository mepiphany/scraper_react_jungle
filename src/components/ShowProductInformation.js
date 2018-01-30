import React, { Component } from 'react';
import axios from 'axios';
import update from 'immutability-helper';

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
  
  // # B002QYW8LW tooth
 // B01HNQ3G5E adidas without dimension
// # B078PBR5C6
  
  handleSubmit(event) {
    axios.post(
      'http://localhost:3001/api/v1/product_informations',
      { asin: this.state.value }
    ).then(response => {
      console.log(response)
      debugger;
      const product_information = update(this.state.product_informations, {
        $splice: [[0, 0, response.data]]
      })  
      console.log(">>>>>>>>>>>>>>>>>")
      console.log(product_information)
      console.log(">>>>>>>>>>>>>>>>>")
      debugger;
      this.setState({product_informations: product_information})
      
    })
    .catch(error => {
      console.log(">>>>>response>>>>>>")
      console.log(error)
      console.log(">>>>>response>>>>>>")
    }
    )
    alert('A name was submitted: ' + this.state.value);
    
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
      
      {this.state.product_informations.map((product_info) => {
        return(
          <div className="tile" key={product_info.id} >
          <h4>{product_info.product_name} | {product_info.asin}</h4>
          </div>
        )       
      })}
      </div>
    );
  }
  
}
  
  export default ShowProductInformation;