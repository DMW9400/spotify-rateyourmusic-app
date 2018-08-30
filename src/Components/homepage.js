import React, { Component } from 'react';

class Homepage extends Component {

  handleSubmit = (event) => {

    event.preventDefault()

    let accessToken = '600a5bd2e1554c0ab6c8fd7ae37b27d9'

    return fetch('https://api.spotify.com/v1/search', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + `${accessToken}`,
          q: 'Pink%20Floyd',
          type: 'artist'
      }

      }).then(res => res.json())
    .then (res => console.log(res));
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
      </div>
      )
  }
}

export default Homepage
