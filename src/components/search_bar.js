import React, { Component } from 'react';
//start with functional component then switch to classs
//when more functionality needed
class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
  }
  render() {
    return (
      <div className = 'search-bar'>
        <input
          value={this.state.term}
          onChange={event=> this.onInputChange( event.target.value )} />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  //STATE:  a plain js object used to record and readct to events
  //whenever state changes render is reran


}

export default SearchBar;
