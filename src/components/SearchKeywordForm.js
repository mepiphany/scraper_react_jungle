import React, { Component } from 'react';
import axios from 'axios';

class SearchKeywordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      result: []
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    axios.post(
      'http://localhost:3001/api/v1/product_informations',
      { asin: this.state.value }
    ).then(response => {
      console.log(">>>>>response>>>>>>")
      console.log(response)
      console.log(">>>>>response>>>>>>")
      
      this.handleRequest(response.data.product_id);
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
      </div>
    ) 
  }
}

export default SearchKeywordForm;