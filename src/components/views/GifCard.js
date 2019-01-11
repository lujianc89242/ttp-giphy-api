import React from 'react';
import './styles/GifCard.css';

function GifCard(props){
  return(
    <ul>{props.data}</ul>
  );
}

export default GifCard;
