import React from 'react';
import './App.css';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      teams: [],
    }
  }

  componentDidMount() {
    fetch("https://statsapi.web.nhl.com/api/v1/standings")
      .then(response => response.json())
      .then(data => this.setState({ teams: data.records }));
  }

  render() {
    console.log(this.state.teams)
    return (
      <div className="App">
        <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
          Data...
        </div>
      </div>
    );
  }
}

