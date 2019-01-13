import React from 'react'
import {List, Label} from "semantic-ui-react";
import "./RateAndFav.css"

const RateAndFav = ({rating, genres}) => {
  if(genres === undefined){
    genres=[]
  }
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

  let differentGenres = genres.map((genre)=><List.Item key={genre.id}>{genre.name}</List.Item>)

  return(
    <List bulleted horizontal>
      <List.Item>
        <Label id='review' circular color={reviewColor} size='large'>
          {rating}
        </Label>
      </List.Item>
      {differentGenres}
    </List>
  )
}

export default RateAndFav