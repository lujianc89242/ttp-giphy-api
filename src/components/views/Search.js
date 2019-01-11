import React, { Component } from 'react';
import GifCard from './GifCard';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: "",
      data: []
    }

  }

  handleChange(e){
    e.preventDefault();
    this.setState( {search: e.target.value} );
  }

  handleNormalSearch(e){
    e.preventDefault();
    const API_KEY = process.env.REACT_APP_API_KEY;
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=${API_KEY}`)
        .then( (response) => (response.json()))
        .then( (myResponse) => {
          const urlArr = myResponse.data.map( (obj) => {
            return <li><img src= {obj.images.fixed_height.url} alt='giphy images'/></li>
          });
          this.setState({data: urlArr});
          console.log(this.state.data);
        })
        .catch( err => console.log("Erroe", err) );
  }

  handleTrendingSearch(e){
    e.preventDefault();
    const API_KEY = process.env.REACT_APP_API_KEY;
    fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`)
        .then( (response) => (response.json()))
        .then( (myResponse) => {
          const urlArr = myResponse.data.map( (obj) => {
            return <li><img src= {obj.images.fixed_height.url} alt='giphy images'/></li>
          });
          this.setState({data: urlArr});
          console.log(this.state.data);
        })
        .catch( err => console.log("Erroe", err) );
  }

  handleRandomSearch(e){
    e.preventDefault();
    const API_KEY = process.env.REACT_APP_API_KEY;
    fetch(`http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
        .then( (response) => (response.json()))
        .then( (myResponse) => {
          const urlArr = myResponse.data.map( (obj) => {
            return <li><img src= {obj.images.fixed_height.url} alt='giphy images'/></li>
          });
          this.setState({data: urlArr});
          console.log(this.state.data);
        })
        .catch( err => console.log("Erroe", err) );
  }

  componentDidMount(){
    this.initialFetch();
  }

  initialFetch(){
    const API_KEY = process.env.REACT_APP_API_KEY;
    fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`)
        .then( (response) => (response.json()))
        .then( (myResponse) => {
          const urlArr = myResponse.data.map( (obj) => {
            return <li><img src= {obj.images.fixed_height.url} alt='giphy images'/></li>
          });
          this.setState({data: urlArr});
          console.log(this.state.data);
          console.log('Initial fetch!!');
        })
        .catch( err => console.log("Erroe", err) );
  }

  render() {
    if(this.state.search !== "" ){
      return (
        <div>
          <input placeholder="Search gifs" className="w3-input w3-border custominput" type="text" name="search" value={this.state.search}  onChange={this.handleChange.bind(this) }/>
          <button className="w3-button w3-pink" onClick={this.handleNormalSearch.bind(this) }>Search</button>
          <button className="w3-button w3-deep-orange" onClick={this.handleTrendingSearch.bind(this) }>Trending</button>
          <button className="w3-button w3-green" onClick={this.handleRandomSearch.bind(this) }>Random</button>
          <GifCard data={this.state.data} />

        </div>
      );
    }

    else{
      // this.initialFetch();
      return(
        <div>
          <input placeholder="Search gifs" className="w3-input w3-border" type="text" name="search" value={this.state.search}  onChange={this.handleChange.bind(this) }/>

          <button className="w3-button w3-pink" onClick={this.handleNormalSearch.bind(this) }>Search</button>
          <button className="w3-button w3-deep-orange" onClick={this.handleTrendingSearch.bind(this) }>Trending</button>
          <button className="w3-button w3-green" onClick={this.handleRandomSearch.bind(this) }>Random</button>

          <GifCard data={this.state.data} />

        </div>
      );
    }
  }

}

export default Search;
