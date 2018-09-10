import React, { Component } from 'react';

class Homepage extends Component {

  state = {
    items: []
  }

  renderMovieInfo = () => {
    console.log('triggered!')
    if(this.state.items.length > 0 ){
      return this.state.items.map(item => {
        return (
          <div>
            <h1>HEADLINE</h1>
            <h2>Category: {item.category}</h2>
            <h3>Borough: {item.borough}</h3>
          </div>
        )
      })
    } else {
      return (
        <h1>NO INFO</h1>
      )
    }
  }

  handleSubmit = (event) => {

    event.preventDefault()

    fetch(`https://data.cityofnewyork.us/resource/6aka-uima.json?$$app_token=`, {
      method: 'GET'
    }).then(res => res.json())
      // .then (res => console.log(res))
      .then(res => this.setState({
        items: res}, ()=> console.log('the state: ', this.state))
      );

  }

  render() {
    return(
      <div>
        <h1>HEAD</h1>
        <form onSubmit={this.handleSubmit} label='Submit'>
          <button>
            Button
          </button>
        </form>
        {this.renderMovieInfo()}
      </div>
      )
  }
}

export default Homepage
