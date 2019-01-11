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
          // console.log(myResponse.data[0].images.original_still.url)
          const urlArr = myResponse.data.map( (obj) => {
            return <li><img src= {obj.images.downsized.url} alt='giphy images'/></li>
          });
          // console.log(urlArr);
          this.setState({data: urlArr});
          console.log(this.state.data);
        })
        .catch( err => console.log("Erroe", err) );
    // console.log(process.env.API_KEY);
  }

  handleTrendingSearch(e){
    e.preventDefault();
    // this.setState( {search: e.target.value} );
    const API_KEY = "mvg6VQsfZTqF3x4WlxK8plrsrIuvRdfx";
    fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`)
        .then( (response) => (response.json()))
        .then( (myResponse) => {
          // console.log(myResponse.data[0].images.original_still.url)
          const urlArr = myResponse.data.map( (obj) => {
            return <li><img src= {obj.images.downsized.url} alt='giphy images'/></li>
          });
          // console.log(urlArr);
          this.setState({data: urlArr});
          console.log(this.state.data);
        })
        .catch( err => console.log("Erroe", err) );
    // console.log(process.env.API_KEY);
  }


  render() {
    // var gifCards = this.state.data.map( (gif =>
    //   <GifCard data={} key={} />
    // );
    return (
      <div>
        <input type="text" name="search" value={this.state.search}  onChange={this.handleChange.bind(this) }/>
        <button onClick={this.handleNormalSearch.bind(this) }>Search</button>
        <button onClick={this.handleTrendingSearch.bind(this) }>Search Trending</button>
        <GifCard data={this.state.data} />
      </div>
    );
  }

}

export default Search;
