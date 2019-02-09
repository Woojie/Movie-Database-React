import React from "react";
import { Label } from "semantic-ui-react";
import "./ReviewLabel.css";

let ReviewLabel = ({ rating }) => {
  let reviewColor;
  if(rating < 11 && rating >= 8.5){
    reviewColor = 'green'
  }else if(rating < 8.5 && rating >= 7){
    reviewColor = 'olive'
  }else if(rating < 7 && rating >= 5){
    reviewColor = 'yellow'
  }else if(rating < 5 && rating >= 4){
    reviewColor = 'orange'
  }else if(rating <4){
    reviewColor = 'red'
  }
  return(
    <Label size='mini' id='review' color={ reviewColor } ribbon> { rating }</Label>
  )
}

export default ReviewLabel